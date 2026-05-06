import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const bestsellers = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/abstract_bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-8 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-serif leading-[1.1] tracking-tight text-primary"
            >
              Redefining Modern Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-neutral-600 font-light max-w-md leading-relaxed"
            >
              Minimal. Timeless. Premium. Experience the luxury of silence through unyielding quality and architectural design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link to="/collection/women" className="inline-block border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary hover:text-white transition-colors duration-500">
                Explore Collection
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <img
              src="/images/women.png"
              alt="Editorial"
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl w-64">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Featured</p>
              <p className="font-serif text-lg">Silk Draped Dress</p>
              <Link to="/collection/women" className="text-xs uppercase tracking-widest mt-4 inline-flex items-center hover:text-neutral-500 transition-colors">
                Shop Now <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Bento Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Women */}
          <Link to="/collection/women" className="lg:col-span-7 group cursor-pointer">
            <div className="w-full h-[700px] overflow-hidden bg-[#f3f3f4] mb-6 relative">
              <img
                src="/images/women.png"
                alt="Women Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-serif text-primary">WOMEN</h2>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>

          {/* Men Column */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:mt-32">
            <Link to="/collection/men" className="group cursor-pointer">
              <div className="w-full h-[500px] overflow-hidden bg-[#f3f3f4] mb-6 relative">
                <img
                  src="/images/men.png"
                  alt="Men Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-serif text-primary">MEN</h2>
                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Curated Selection</h2>
            <p className="text-neutral-500 leading-relaxed">
              Discover our latest arrivals, designed with uncompromising attention to detail and crafted from the finest materials. The epitome of quiet luxury.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bestsellers.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/collection/men" className="inline-block border-b border-primary pb-2 text-xs uppercase tracking-[0.2em] hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" className="w-full h-full object-cover grayscale brightness-50" />
        </div>
        <div className="relative z-10 text-white max-w-3xl flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif leading-tight mb-8"
          >
            We believe in the power of restraint. In an age of excess, true luxury lies in the spaces we choose to leave empty.
          </motion.h2>
          <div className="w-px h-16 bg-white/50 mb-8" />
          <Link to="/about" className="text-xs uppercase tracking-widest border-b border-white pb-2 hover:text-white/70 transition-colors">
            Our Philosophy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
