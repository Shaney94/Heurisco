import { motion } from 'motion/react';

interface PillProps {
  children: React.ReactNode;
  delay?: number;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  ariaLabel?: string;
}

export function Pill({
  children,
  delay = 0,
  active = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ariaLabel,
}: PillProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      aria-label={ariaLabel}
      aria-pressed={active}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`relative z-30 h-7 px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300 cursor-pointer text-left whitespace-nowrap pointer-events-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
        active
          ? 'bg-white/10 border-white/60 text-white'
          : 'bg-gray-600/25 border-gray-400/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/60'
      }`}
      style={{ fontSize: '0.8125rem', fontWeight: 400, fontFamily: 'Inter, sans-serif', pointerEvents: 'auto' }}
    >
      {children}
    </motion.button>
  );
}
