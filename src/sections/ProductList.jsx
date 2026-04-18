import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductList() {
  // Deklarasi State untuk Filter & Sort
  const [activeCategory, setActiveCategory] = useState('Semua Produk');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Terpopuler');

  const categories = ['Semua Produk', 'Sayur', 'Buah', 'Beras', 'Rempah'];

  // Logic Eksekusi Filter & Sort
  const filteredProducts = products
    .filter(product => {
      // 1. Filter by Category
      if (activeCategory !== 'Semua Produk' && product.category !== activeCategory) {
        return false;
      }
      // 2. Filter by Search Text
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // 3. Sorting by Price / Name
      if (sortBy === 'Harga Terendah') return a.price - b.price;
      if (sortBy === 'Harga Tertinggi') return b.price - a.price;
      if (sortBy === 'A - Z') return a.name.localeCompare(b.name);
      return 0; // Default Terpopuler
    });

  return (
    <section id="products" className="py-20 bg-bodylight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog <span className="text-primary">Produk</span></h2>
          <p className="text-gray-600 text-lg">Pilih hasil bumi organik terbaik favorit Anda</p>
        </div>

        {/* Panel Filter Khas Marketplace */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Group Kiri: Pills Filter Kategori */}
            <div className="flex flex-wrap gap-2 md:gap-3 text-sm font-bold w-full lg:w-auto">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full transition-all shadow-sm border ${
                    activeCategory === cat 
                      ? 'bg-primary text-white border-primary cursor-default' 
                      : 'bg-white text-gray-500 hover:text-gray-900 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Group Kanan: Search & Sort Dropdown */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              
              {/* Input Pencarian */}
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Cari item organik..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 text-sm rounded-xl pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>

              {/* Dropdown Sorting */}
              <div className="relative w-full sm:w-48">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-gray-50 text-sm font-extrabold text-gray-700 rounded-xl pl-4 pr-10 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white cursor-pointer"
                >
                  <option value="Terpopuler">Sort: Terpopuler</option>
                  <option value="Harga Terendah">Harga: Terendah</option>
                  <option value="Harga Tertinggi">Harga: Tertinggi</option>
                  <option value="A - Z">Nama: A - Z</option>
                </select>
                <svg className="w-5 h-5 text-gray-500 absolute right-3 top-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Render Grid & Logika "Tidak Ditemukan" */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-gray-500">Coba gunakan kata kunci lain atau ubah varian kategori.</p>
          </div>
        )}

        {/* Tombol Outline "Muat Lebih Banyak" */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 text-center">
            <button className="px-10 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
              Muat Lebih Banyak Produk
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
