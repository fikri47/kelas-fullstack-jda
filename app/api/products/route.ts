import { 
    getProducts, 
    addProduct, 
    updateProduct, 
    deleteProduct 
} from '../../lib/products'; 
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(getProducts());
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = addProduct(data);
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, ...updates } = await request.json();
  const updated = updateProduct(id, updates);
  
  if (!updated) {
    return NextResponse.json(
      { error: "Product not found" }, 
      { status: 404 }
    );
  }
  
  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  deleteProduct(id);
  return NextResponse.json({ id }, { status: 200 });
}