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
      className={`relative z-30 h-9 lg:h-10 px-4 lg:px-5 rounded-full backdrop-blur-sm border transition-all duration-300 cursor-pointer text-left whitespace-nowrap pointer-events-auto text-[0.9375rem] lg:text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
        active
          ? 'bg-[#343140] border-white/35 text-white'
          : 'bg-[#272532]/90 border-white/10 text-white/85 hover:bg-[#302d3c] hover:text-white hover:border-white/30'
      }`}
      style={{ fontWeight: 500, fontFamily: 'Inter, sans-serif', pointerEvents: 'auto' }}
    >
      {children}
    </motion.button>
  );
}
