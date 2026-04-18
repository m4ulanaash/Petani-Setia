export default function Newsletter() {
  return (
    <section className="py-24 bg-[#F2F1E5]"> {/* Background warna cream tebal, persis image UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* Sisi Kiri: Gambar Rumah Ladang/Pertanian */}
          <div className="lg:w-1/2 relative w-full h-auto">
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[450px] w-full relative z-0">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" 
                alt="Pertanian Petani Setia" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Box Melayang telah dihapus sesuai permintaan, sisa gambar saja */}
          </div>

          {/* Sisi Kanan: Teks Berlangganan & Input Form */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 text-center lg:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Berlangganan Kabar <br />
              <span className="text-primary">Panen Raya.</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base md:text-lg font-medium leading-relaxed">
              Dapatkan informasi produk musiman terbaru dan penawaran khusus langsung dari kebun kami ke inbox Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-base text-gray-800 placeholder-gray-400 font-medium"
              />
              <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-green-800 transition-colors whitespace-nowrap shadow-md hover:shadow-xl hover:-translate-y-0.5 transform">
                Gabung Sekarang
              </button>
            </div>
            
            <p className="text-[11px] text-gray-400 mt-5 font-medium tracking-wide">
              Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
