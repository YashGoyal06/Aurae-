import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ finishLoading }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDone(true);
      setTimeout(finishLoading, 1000);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  const brandName = "AURAE";
  const letters = brandName.split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: "easeInOut", duration: 0.8 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/abstract_bg.png"
          alt="Loading Background"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[#f9f9f9]/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-16 w-full max-w-[800px] px-6">
        <motion.div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              className="text-5xl md:text-7xl font-serif text-primary tracking-[0.3em] drop-shadow-sm"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex flex-col items-center w-full max-w-[240px] space-y-6">
          <div className="w-full h-[1px] bg-neutral-300 relative overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full w-[40%] bg-primary"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-neutral-600"
          >
            Entering The Silence
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
