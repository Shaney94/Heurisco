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
      className={`relative z-30 h-8 lg:h-[34px] px-3.5 lg:px-4 rounded-full backdrop-blur-sm transition-colors duration-300 cursor-pointer text-left whitespace-nowrap pointer-events-auto text-sm lg:text-[0.9375rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
        active
          ? 'bg-[#343140] text-white'
          : 'bg-[rgba(39,37,50,0.9)] text-white/85 hover:bg-[#302d3c] hover:text-white'
      }`}
      style={{ fontWeight: 500, fontFamily: 'Inter, sans-serif', pointerEvents: 'auto' }}
    >
      {children}
    </motion.button>
  );
}
