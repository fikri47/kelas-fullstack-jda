import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link 
          href="/" 
          className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}