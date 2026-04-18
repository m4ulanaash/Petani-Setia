export default function Marketplace() {
  return (
    <section id="marketplace" className="py-20 bg-green-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pesan Melalui Marketplace</h2>
        <p className="text-gray-700 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Dapatkan kemudahan berbelanja dengan tambahan diskon ongkir, temukan toko resmi kami di platform e-commerce favorit Anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#" className="w-full sm:w-64 bg-cta text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1">
            🛒 Beli di Shopee
          </a>
          <a href="#" className="w-full sm:w-64 bg-[#00AA5B] text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg hover:bg-green-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1">
            🛍️ Beli di Tokopedia
          </a>
        </div>
      </div>
    </section>
  );
}
