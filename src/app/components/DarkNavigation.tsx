import { useState, useEffect } from 'react';
import { EnvelopeIcon } from './EnvelopeIcon';

interface DarkNavigationProps {
  onMenuClick: () => void;
  onContactClick: () => void;
}

export function DarkNavigation({ onMenuClick, onContactClick }: DarkNavigationProps) {
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

        <div
          className="absolute left-1/2 -translate-x-1/2 text-white"
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: '1.0625rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          Heurisco
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="text-white/50" style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif' }}>
            {time}
          </div>
          <button
            onClick={onContactClick}
            onMouseEnter={() => setIsMailHovered(true)}
            onMouseLeave={() => setIsMailHovered(false)}
            className="relative rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 hover:bg-black/60 hover:border-white/30 flex items-center justify-center overflow-hidden transition-all duration-300"
            style={{
              width: isMailHovered ? '140px' : '28px',
              height: '28px',
            }}
          >
            <div className="flex items-center text-white">
              <EnvelopeIcon className="w-3.5 h-3.5 flex-shrink-0" />
              <span
                className="ml-2 whitespace-nowrap"
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'Inter, sans-serif',
                  opacity: isMailHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
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
