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
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
    >
      <div className="relative overflow-hidden">
        <motion.div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              className="text-5xl md:text-8xl font-serif text-secondary tracking-[0.2em] relative"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="h-[1px] bg-secondary/30 mt-4 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
