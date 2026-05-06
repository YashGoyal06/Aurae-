import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import { useState } from 'react';
import { Heart, Share2, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size');
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Images */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:col-span-2 aspect-[4/5] bg-neutral-100 overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          {/* Mock extra images */}
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-150 origin-top" />
          </div>
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale brightness-90" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="flex items-center text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
              <span>Home</span>
              <ChevronRight size={10} className="mx-2" />
              <span>{product.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif mb-2">{product.name}</h1>
            <p className="text-xl font-medium mb-8">${product.price}.00</p>

            <p className="text-sm text-neutral-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-widest font-semibold">Select Size</span>
                <button className="text-[10px] uppercase tracking-widest text-accent border-b border-accent">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs border transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-secondary'
                        : 'border-neutral-200 hover:border-primary text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-5 uppercase tracking-[0.3em] text-xs font-bold transition-all duration-500 ${
                  isAdded ? 'bg-green-600 text-white' : 'bg-primary text-secondary hover:bg-neutral-800'
                }`}
              >
                {isAdded ? 'Added to Bag' : 'Add to Bag'}
              </button>
              <div className="flex gap-4">
                <button className="flex-1 py-4 border border-neutral-200 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-semibold hover:border-primary transition-colors">
                  <Heart size={14} /> Wishlist
                </button>
                <button className="flex-1 py-4 border border-neutral-200 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-semibold hover:border-primary transition-colors">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>

            {/* Details Accordion */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Details & Composition</h4>
              <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-neutral-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
