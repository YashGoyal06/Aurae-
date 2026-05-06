import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Left: Links */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/collection/men" className="nav-link">Men</Link>
          <Link to="/collection/women" className="nav-link">Women</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Center: Brand */}
        <Link to="/" className="text-2xl font-serif tracking-[0.3em] font-medium absolute left-1/2 -translate-x-1/2">
          AURAE
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-accent transition-colors"><Search size={20} /></button>
          <button className="hover:text-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              <Link to="/collection/men" className="nav-link" onClick={() => setIsOpen(false)}>Men</Link>
              <Link to="/collection/women" className="nav-link" onClick={() => setIsOpen(false)}>Women</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Need to import AnimatePresence from framer-motion inside the file
import { AnimatePresence } from 'framer-motion';

export default Navbar;
