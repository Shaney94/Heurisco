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
  mobileActiveStyle?: boolean;
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
  mobileActiveStyle = false,
}: PillProps) {
  const activeClasses = mobileActiveStyle ? 'border-transparent bg-white text-black' : 'border-white/70 bg-white/[0.02] text-white';

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
      className={`relative z-30 h-7 lg:h-8 px-3.5 lg:px-4 rounded-full border backdrop-blur-sm transition-colors duration-300 cursor-pointer text-left whitespace-nowrap pointer-events-auto text-sm lg:text-[0.9375rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
        active
          ? activeClasses
          : 'border-transparent bg-[rgba(39,37,50,0.9)] text-white/85 hover:border-white/70 hover:bg-white/[0.02] hover:text-white'
      }`}
      style={{ fontWeight: 400, fontFamily: 'Inter, sans-serif', pointerEvents: 'auto' }}
    >
      {children}
    </motion.button>
  );
}
