export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
        {/* Floating Badge (seperti di referensi) */}
        {product.badge && (
          <span className={`absolute top-4 left-4 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider ${product.badgeColor} shadow-sm`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
          <span className="bg-[#F0F2EB] text-gray-500 text-xs font-bold px-2.5 py-1 rounded-md ml-3 whitespace-nowrap">{product.weight}</span>
        </div>
        <div className="text-xl font-extrabold text-primary mb-6">Rp {product.price.toLocaleString('id-ID')}</div>
        
        {/* 2 Buah Tombol Action Full-Width yang ditumpuk */}
        <div className="mt-auto space-y-3">
          <button className="w-full bg-[#FF4A3F] text-white py-3 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
            Beli di Shopee
          </button>
          <button className="w-full bg-[#00AA5B] text-white py-3 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
            Beli di Tokopedia
          </button>
        </div>
      </div>
    </div>
  );
}
