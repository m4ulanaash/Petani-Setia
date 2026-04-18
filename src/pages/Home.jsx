import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../sections/ProductList';
import Newsletter from '../sections/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-bodylight scroll-smooth min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <ProductList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
