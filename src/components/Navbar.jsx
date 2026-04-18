export default function Navbar() {
  return (
    <nav className="bg-[#FDFCF8] fixed w-full top-0 left-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl text-primary tracking-tight cursor-pointer">
              Petani Setia
            </span>
          </div>
          
          {/* Menu Tengah */}
          <div className="hidden md:flex space-x-10 items-center h-full">
            <a href="#home" className="text-gray-900 border-b-2 border-primary font-semibold h-full flex items-center transition-colors">Beranda</a>
            <a href="#products" className="text-gray-600 hover:text-primary font-medium h-full flex items-center transition-colors">Katalog</a>
            <a href="#about" className="text-gray-600 hover:text-primary font-medium h-full flex items-center transition-colors">Tentang Kami</a>
            <a href="#contact" className="text-gray-600 hover:text-primary font-medium h-full flex items-center transition-colors">Kontak</a>
          </div>

          {/* Bagian Kanan (Search & Icons) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari buah/sayur..." 
                className="bg-gray-100 text-sm rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-primary w-48 transition-all"
              />
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button className="text-gray-600 hover:text-primary p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </button>
            <button className="text-gray-600 hover:text-primary p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
