import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const productDatabase = [
  {
    id: 1,
    name: 'Terjemah Bulughul Maram A Hasan',
    price: 100000,
    desc: 'Buku ini membahas Pencapaian Tujuan Berdasarkan Dalil-dalil Hukum',
    author: 'A. Hasan',
    pages: 712,
    cover: '/images/Bulughul.jpg'
  }
];

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = productDatabase.find(p => p.id === Number(params.id));
  
  if (!product) return notFound();

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100 p-6 flex items-center justify-center">
            <div className="w-full h-64 bg-gray-300 rounded-lg">
               {product.cover ? (
                <Image
                    src={product.cover}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                />
                ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                <span>Tidak Ada Gambar</span>
                </div>
                )}
            </div>
          </div>
          
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">Oleh: {product.author}</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-2xl font-bold text-green-800 mb-2">
                Rp {product.price.toLocaleString()}
              </p>
              <p className="text-gray-700">{product.desc}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700">Halaman</h3>
                <p>{product.pages} halaman</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Stok</h3>
                <p>Tersedia</p>
              </div>
            </div>

            <button className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>

      <Link 
        href="/products" 
        className="inline-block mt-6 text-green-800 hover:underline"
      >
        &larr; Kembali ke Daftar Produk
      </Link>
    </div>
  );
}