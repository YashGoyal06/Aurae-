import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 w-[95%] md:w-[85%] lg:w-[75%] max-w-screen-xl"
    >
      <nav className="bg-white/50 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-8 py-4 flex items-center justify-between">
        {/* Left: Brand (Home) */}
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-[0.3em] font-light">
          AURAE
        </Link>

        {/* Right: Links & Icons */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="nav-link text-xs">Home</Link>
            <Link to="/collection/men" className="nav-link text-xs">Men</Link>
            <Link to="/collection/women" className="nav-link text-xs">Women</Link>
            <Link to="/about" className="nav-link text-xs">About</Link>
            <Link to="/contact" className="nav-link text-xs">Contact</Link>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-neutral-300"></div>

          <div className="flex items-center space-x-6">
            <button className="hover:text-neutral-500 transition-colors"><Search size={18} /></button>
            <button className="hover:text-neutral-500 transition-colors relative">
              <ShoppingBag size={18} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/50 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[2rem] overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              <Link to="/collection/men" className="nav-link text-xs" onClick={() => setIsOpen(false)}>Men</Link>
              <Link to="/collection/women" className="nav-link text-xs" onClick={() => setIsOpen(false)}>Women</Link>
              <Link to="/about" className="nav-link text-xs" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="nav-link text-xs" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Need to import AnimatePresence from framer-motion inside the file
import { AnimatePresence } from 'framer-motion';

export default Navbar;
