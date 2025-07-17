'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState({ name: '', price: 0 });
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products`);
      const products = await res.json();
      const found = products.find((p: any) => p.id === Number(params.id));
      if (found) setProduct(found);
    };
    fetchProduct();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Number(params.id),
        ...product
      })
    });
    
    if (res.ok) router.push('/products');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Buku</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Nama Buku</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Harga</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={product.price}
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
            required
          />
        </div>
        
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => router.push('/products')}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}