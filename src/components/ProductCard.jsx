import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full py-3 bg-white text-primary text-[10px] uppercase tracking-widest font-medium">
              Quick View
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-tight">{product.name}</h3>
            <p className="text-xs text-accent mt-1 uppercase tracking-widest">{product.category}</p>
          </div>
          <span className="text-sm font-medium">${product.price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
