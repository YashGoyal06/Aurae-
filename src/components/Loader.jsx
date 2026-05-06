import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Silk from './Silk';

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
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      transition: { ease: "easeInOut", duration: 0.8 }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)", 
      scale: 1.2,
      y: 15
    },
    show: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.4, 
        ease: [0.22, 1, 0.36, 1] // Custom refined cubic-bezier for silky smooth stop
      } 
    },
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
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 opacity-80"
      >
        <Silk color="#e6e4dc" speed={2} scale={1.5} noiseIntensity={1} />
        <div className="absolute inset-0 bg-[#f9f9f9]/40 backdrop-blur-[2px]" />
      </motion.div>

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
