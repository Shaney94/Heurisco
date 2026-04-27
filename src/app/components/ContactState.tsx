import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { EnvelopeIcon } from './EnvelopeIcon';

interface ContactStateProps {
  onBack: () => void;
}

export function ContactState({ onBack }: ContactStateProps) {
  const [time, setTime] = useState('');

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-black overflow-auto"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-[70] px-6 lg:px-8 py-5 bg-black/80 backdrop-blur-sm">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
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
            <div className="w-7 h-7 rounded-full bg-gray-600/25 backdrop-blur-sm border border-gray-400/20 flex items-center justify-center text-white">
              <EnvelopeIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="text-white mb-12"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '0.01em',
                }}
              >
                Say hey.
              </h1>

              <div className="space-y-6 mb-12">
                <p className="text-white/60" style={{ fontSize: '1rem', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                  Not sure where to start?
                </p>
                <p className="text-white/60" style={{ fontSize: '1rem', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                  Tell us about your service, product, timeline, and what you're trying to improve. Or reach out directly at contact@heurisco.io.
                </p>
                <p className="text-white/60" style={{ fontSize: '1rem', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                  We read every message. So, thanks in advance for making it a good one.
                </p>
              </div>

              <div className="flex gap-6">
                <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif' }}>LinkedIn</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif' }}>Instagram</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif' }}>X</a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 mb-2" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white/60 focus:outline-none transition-colors"
                      style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-2" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white/60 focus:outline-none transition-colors"
                      style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 mb-2" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                      How did you hear of us?*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your answer"
                      className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white/60 focus:outline-none transition-colors"
                      style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-2" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                      What stage is your company?
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white/60 focus:outline-none transition-colors"
                      style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="" className="bg-black">Select One</option>
                      <option value="early" className="bg-black">Early-stage startup</option>
                      <option value="mid" className="bg-black">Mid-stage startup</option>
                      <option value="late" className="bg-black">Late-stage startup</option>
                      <option value="enterprise" className="bg-black">Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 mb-2" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                    Message*
                  </label>
                  <textarea
                    placeholder="Type your message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white/60 focus:outline-none transition-colors resize-none"
                    style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent" />
                    <span className="text-white/60" style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                      Signup to Newsletter
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300"
                    style={{ fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
