import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-green-800 mb-6">Selamat Datang di Persatuan Islam</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Organisasi Islam yang berkomitmen menekankan pentingnya Al-Quran dan Sunah sebagai sumber nilai, keyakinan, dan perilaku keagamaan.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link 
            href="/about" 
            className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Tentang Kami
          </Link>
          <Link 
            href="/profile" 
            className="border border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Profil Organisasi
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 my-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Dakwah</h2>
          <p className="text-gray-600">
            Menyebarkan dakwah Islam yang murni sesuai pemahaman salafus shalih.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Pendidikan</h2>
          <p className="text-gray-600">
            Mengelola lembaga pendidikan dari TK hingga perguruan tinggi.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Sosial</h2>
          <p className="text-gray-600">
            Membangun masyarakat melalui program sosial dan pemberdayaan.
          </p>
        </div>
      </section>
    </main>
  );
}
