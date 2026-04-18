export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Hubungi <span className="text-primary">Kami</span></h2>
        
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="Masukkan nama Anda..." required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Pesan / Pesanan</label>
              <textarea id="message" rows="4" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-y" placeholder="Tuliskan daftar pesanan atau pertanyaan Anda..." required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400">
              Kirim Pesan via WhatsApp 💬
            </button>
          </form>
          
          <div className="mt-10 pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-center gap-4 md:gap-10">
            <div className="flex items-center justify-center gap-2 text-gray-600 font-medium">
              <span className="text-xl">📍</span> Jl. Pertanian Organik No. 12, Bogor
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 font-medium">
              <span className="text-xl">📞</span> +62 812-3456-7890
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
