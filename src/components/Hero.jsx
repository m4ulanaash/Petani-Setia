export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-[600px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block bg-green-100 text-green-800 font-bold text-xs px-3 py-1.5 rounded-full mb-5 shadow-sm">
            PANEN SETIAP HARI
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Segar Dari Tanah,<br />
            <span className="text-green-400">Untuk Meja Anda.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg">
            Mendukung petani lokal dengan menghadirkan sayuran dan buah organik berkualitas tinggi tanpa pestisida kimia.
          </p>
          <a href="#products" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl group">
            Lihat Katalog Produk 
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
