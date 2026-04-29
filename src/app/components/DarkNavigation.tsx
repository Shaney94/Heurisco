import { useState, useEffect } from 'react';
interface DarkNavigationProps {
  onMenuClick: () => void;
  onContactClick: () => void;
  onHomeClick: () => void;
}

export function DarkNavigation({ onMenuClick, onContactClick, onHomeClick }: DarkNavigationProps) {
  const [time, setTime] = useState('');
  const [isMailHovered, setIsMailHovered] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(`CPH ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-5">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="px-3 py-1.5 rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 text-white/70 hover:bg-black/60 hover:text-white hover:border-white/30 transition-all duration-300"
          style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif' }}
        >
          Menu
        </button>

        <button
          type="button"
          onClick={onHomeClick}
          aria-label="Return to home"
          className="absolute left-1/2 -translate-x-1/2 text-white cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: '1.0625rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          Heurisco
        </button>

        <div className="flex items-center justify-end gap-2.5 ml-auto">
          <div className="text-white/50" style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif' }}>
            {time}
          </div>
          <button
            type="button"
            aria-label="Get in touch"
            onClick={onContactClick}
            onMouseEnter={() => setIsMailHovered(true)}
            onMouseLeave={() => setIsMailHovered(false)}
            onFocus={() => setIsMailHovered(true)}
            onBlur={() => setIsMailHovered(false)}
            className="rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 hover:bg-black/60 hover:border-white/30 focus-visible:bg-black/60 focus-visible:border-white/30 flex items-center justify-center overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            style={{
              width: isMailHovered ? '140px' : '30px',
              height: '30px',
            }}
          >
            <div className="flex items-center justify-center text-white">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span
                className="whitespace-nowrap overflow-hidden"
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'Inter, sans-serif',
                  width: isMailHovered ? '88px' : 0,
                  marginLeft: isMailHovered ? '8px' : 0,
                  opacity: isMailHovered ? 1 : 0,
                  transition: 'width 0.3s ease, margin-left 0.3s ease, opacity 0.3s ease',
                  pointerEvents: 'none',
                }}
              >
                Get in touch
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
