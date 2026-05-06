import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const bestsellers = PRODUCTS.slice(0, 3);
  const newArrivals = PRODUCTS.slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero.png"
            alt="Aurae Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white text-5xl md:text-8xl font-serif tracking-[0.2em] mb-6"
          >
            AURAE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 text-sm md:text-base uppercase tracking-[0.4em] mb-12"
          >
            Elegance in Minimalism
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/collection/men" className="btn-primary !bg-white !text-primary hover:!bg-neutral-100 mr-4">
              Shop Men
            </Link>
            <Link to="/collection/women" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary">
              Shop Women
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/80 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group h-[500px] overflow-hidden cursor-pointer"
          >
            <Link to={cat.path}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-serif tracking-widest uppercase">{cat.name}</h2>
                <span className="mt-4 text-xs uppercase tracking-[0.3em] flex items-center border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Bestsellers */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-2">Curated Selection</h2>
              <h3 className="text-3xl md:text-4xl font-serif">Bestsellers</h3>
            </div>
            <Link to="/collection/men" className="text-xs uppercase tracking-widest font-medium border-b border-primary pb-1 mt-6 md:mt-0">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bestsellers.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" className="w-full h-full object-cover grayscale brightness-50" />
        </div>
        <div className="relative z-10 px-6 md:px-20 text-white max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif leading-tight mb-8"
          >
            Crafted for the modern minimalist.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base text-white/70 leading-relaxed mb-10 tracking-wide"
          >
            AURAE is more than a brand; it's a philosophy of living with intention. 
            Every piece is designed with longevity and subtle sophistication in mind.
          </motion.p>
          <Link to="/about" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary">
            Our Philosophy
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding">
        <div className="max-w-screen-2xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Latest Additions</h2>
          <h3 className="text-4xl md:text-5xl font-serif">New Arrivals</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {newArrivals.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
