import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
  onHomeClick: () => void;
}

const menuItems = [
  { name: 'Synexia', color: '#4F46E5' },
  { name: 'VoiceOver', color: '#7C3AED' },
  { name: 'KBHFF', color: '#2563EB' },
  { name: 'Napier', color: '#0891B2' },
  { name: 'IKEA', color: '#059669' },
  { name: 'Alba Denim', color: '#DC2626' },
  { name: 'Elderune', color: '#EA580C' },
  { name: 'All Work', color: '#8B5CF6' },
  { name: 'Contact', color: '#6366F1' },
];

export function MenuOverlay({ isOpen, onClose, onContactClick, onHomeClick }: MenuOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] bg-black"
        >
          {/* Header */}
          <div className="fixed top-0 left-0 right-0 z-[70] px-6 lg:px-8 py-5">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 text-white/70 hover:bg-black/60 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-1.5"
                style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif' }}
              >
                <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                Close
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
            </div>
          </div>

          {/* Content */}
          <div className="h-full flex items-center">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
              {/* Menu items */}
              <div>
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => {
                        if (item.name === 'Contact') {
                          onContactClick();
                        }
                      }}
                      className="block w-full text-left px-6 py-4 rounded-lg transition-all duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 300,
                        color: hoveredItem === item.name ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: hoveredItem === item.name ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                      }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Preview area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden lg:flex items-center justify-center h-[600px]"
              >
                <AnimatePresence mode="wait">
                  {hoveredItem && (
                    <motion.div
                      key={hoveredItem}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full rounded-xl flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle at center, ${menuItems.find(i => i.name === hoveredItem)?.color}30, transparent)`,
                      }}
                    >
                      <div className="text-white/20 text-center" style={{ fontSize: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                        {hoveredItem} Preview
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
