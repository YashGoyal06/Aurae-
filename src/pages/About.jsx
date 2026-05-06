import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif text-primary mb-8"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-px h-24 bg-neutral-300 mx-auto origin-top"
          />
        </div>

        {/* Content */}
        <div className="space-y-32">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif mb-6 text-primary">The Luxury of Silence</h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                In a world increasingly defined by noise and rapid consumption, AURAE was born out of a desire for quiet confidence. We believe that true luxury does not shout; it whispers through the impeccable quality of its materials and the precision of its cut.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light">
                Founded in 2024, our studio is dedicated to creating garments that transcend seasonal trends. Each piece is an architectural study in form and function, designed to become a timeless cornerstone of your wardrobe.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] bg-neutral-100 overflow-hidden"
            >
              <img src="/images/women.png" alt="Aurae Philosophy" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/3] bg-neutral-100 overflow-hidden md:order-1 order-2"
            >
              <img src="/images/sweater.png" alt="Craftsmanship" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:order-2 order-1"
            >
              <h2 className="text-3xl font-serif mb-6 text-primary">Uncompromising Craft</h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We source only the finest natural fibers—from Mongolian cashmere to Italian virgin wool and pure Mulberry silk. Our relationships with ethical mills and artisan ateliers ensure that every seam is a testament to heritage craftsmanship.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light">
                Sustainability is not an afterthought, but woven into the very fabric of our process. By creating fewer, better things, we honor the environment and the hands that craft our collections.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Closing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40 text-center"
        >
          <h3 className="text-2xl font-serif italic text-primary mb-6">"Elegance is elimination."</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">— The AURAE Team</p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
