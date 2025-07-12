export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Tentang Persatuan Islam</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sejarah</h2>
          <p className="text-gray-700 leading-relaxed">
            Persatuan Islam (Persis) didirikan pada 12 September 1923 di Bandung 
            oleh sekelompok ulama dan aktivis Islam yang ingin memurnikan ajaran Islam 
            dari praktik-praktik bid'ah dan khurafat.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Visi & Misi</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Memurnikan tauhid dan aqidah</li>
            <li>Menyebarkan dakwah Islam sesuai Al-Qur'an dan Sunnah</li>
            <li>Membangun umat yang berilmu dan berakhlak</li>
          </ul>
        </div>
      </div>
    </div>
  );
}