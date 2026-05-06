import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-[0.3em] font-medium block mb-8">
              AURAE
            </Link>
            <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
              Handcrafted minimalism for the modern soul. Join us in our pursuit of timeless elegance.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-secondary/40">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/collection/men" className="text-sm hover:text-accent transition-colors">Men's Collection</Link></li>
              <li><Link to="/collection/women" className="text-sm hover:text-accent transition-colors">Women's Collection</Link></li>
              <li><Link to="/new-arrivals" className="text-sm hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="text-sm hover:text-accent transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-secondary/40">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-sm hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-accent transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-secondary/40">Newsletter</h4>
            <p className="text-sm text-secondary/60 mb-6 leading-relaxed">
              Subscribe to receive updates on new collections and editorial stories.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-secondary/20 pb-2 text-xs focus:border-secondary outline-none transition-colors"
              />
              <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-bold">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-secondary/40">
          <p>© 2026 AURAE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">Pinterest</a>
            <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
