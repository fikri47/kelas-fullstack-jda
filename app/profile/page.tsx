export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-800 p-6 text-white">
          <h1 className="text-3xl font-bold">Profil Organisasi</h1>
          <p className="opacity-90">Persatuan Islam (Persis)</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Kontak</h2>
            <p>Email: info@persis.or.id</p>
            <p>Website: https://persis.or.id</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">Ketua Umum: KH Jeje Zaenuddin</h2>
            <p>Ketua Umum Persis</p>
            <p>Masa Jiihad 2022-2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}