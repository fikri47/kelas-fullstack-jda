'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newProduct.name,
        price: Number(newProduct.price)
      })
    });
    
    if (res.ok) {
      setNewProduct({ name: '', price: '' });
      fetchProducts();
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Hapus produk ini?')) return;
    
    await fetch('/api/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    
    fetchProducts();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Produk Buku</h1>

      {/* Form Tambah Buku */}
      <form onSubmit={handleAdd} className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Tambah Buku Baru</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama Buku"
            className="p-2 border rounded"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Harga"
            className="p-2 border rounded"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            required
          />
          <button 
            type="submit" 
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Tambah Buku
          </button>
        </div>
      </form>

      {/* Daftar Buku */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Nama</th>
              <th className="py-2 px-4 border">Harga</th>
              <th className="py-2 px-4 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border">{product.id}</td>
                <td className="py-2 px-4 border">{product.name}</td>
                <td className="py-2 px-4 border">Rp {product.price.toLocaleString()}</td>
                <td className="py-2 px-4 border">
                  <div className="flex gap-2">
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}