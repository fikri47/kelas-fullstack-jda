import Link from 'next/link';

const products = [
  { id: 1, name: 'Terjemah Bulughul Maram A Hasan', price: 100000, desc: 'Pencapaian Tujuan Berdasarkan Dalil-dalil Hukum' },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Produk Buku</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
            <p className="text-gray-600 my-2">{product.desc}</p>
            <p className="text-lg font-bold mt-3">Rp {product.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}