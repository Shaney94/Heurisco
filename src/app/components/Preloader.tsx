import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white"
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '1.125rem',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        Heurisco
      </motion.div>
    </motion.div>
  );
}
