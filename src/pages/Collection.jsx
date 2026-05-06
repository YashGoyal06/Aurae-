import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Collection = () => {
  const { type } = useParams();
  const filteredProducts = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
      <div className="mb-16">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-serif capitalize"
        >
          {type}'s Collection
        </motion.h1>
        <div className="flex justify-between items-center mt-8 border-b border-neutral-100 pb-6">
          <p className="text-sm text-accent">{filteredProducts.length} Products</p>
          <div className="flex space-x-8">
            <button className="text-xs uppercase tracking-widest font-medium hover:text-accent">Filter</button>
            <button className="text-xs uppercase tracking-widest font-medium hover:text-accent">Sort</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-accent uppercase tracking-widest">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Collection;
