import { motion } from 'motion/react';

interface PillProps {
  children: React.ReactNode;
  delay?: number;
}

export function Pill({ children, delay = 0 }: PillProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="px-3 py-1.5 rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 text-white/70 hover:bg-black/60 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer text-left whitespace-nowrap pointer-events-auto"
      style={{ fontSize: '0.8125rem', fontWeight: 400, fontFamily: 'Inter, sans-serif', pointerEvents: 'auto' }}
    >
      {children}
    </motion.button>
  );
}
