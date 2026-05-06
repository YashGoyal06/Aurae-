import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif text-primary mb-6"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-neutral-500 uppercase tracking-widest text-xs"
          >
            We are here to assist you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-16 lg:pr-12"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-4 border-b border-neutral-200 pb-2">Client Services</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                For inquiries regarding products, styling advice, or assistance with an existing order, our client advisors are available Monday through Friday, 9am to 6pm (EST).
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium">T: +1 (800) 123-4567</p>
                <p className="text-sm font-medium">E: clientservices@aurae.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-4 border-b border-neutral-200 pb-2">Headquarters</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                AURAE Studio<br />
                124 Minimalist Way, Suite 400<br />
                New York, NY 10012<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-4 border-b border-neutral-200 pb-2">Press & Media</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                For all press inquiries, collaborations, and media requests.
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium">E: press@aurae.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-white p-10 md:p-16 shadow-sm"
          >
            <h2 className="text-2xl font-serif text-primary mb-8">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">First Name</label>
                  <input type="text" className="border-b border-neutral-200 pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Last Name</label>
                  <input type="text" className="border-b border-neutral-200 pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-sm" required />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Email Address</label>
                <input type="email" className="border-b border-neutral-200 pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-sm" required />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Subject</label>
                <select className="border-b border-neutral-200 pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-sm text-neutral-700">
                  <option>Order Inquiry</option>
                  <option>Product Information</option>
                  <option>Returns & Exchanges</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea rows="4" className="border-b border-neutral-200 pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-sm resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white text-xs uppercase tracking-[0.2em] py-5 font-bold hover:bg-neutral-800 transition-colors mt-8">
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
