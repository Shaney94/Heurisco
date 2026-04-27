import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <motion.line
            x1="100" y1="200" x2="400" y2="350"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="400" y1="350" x2="600" y2="250"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.line
            x1="600" y1="250" x2="900" y2="400"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.1 }}
          />

          <motion.rect
            x="350" y="320" width="100" height="60"
            fill="white" stroke="#4A90E2" strokeWidth="1" rx="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
          <motion.rect
            x="550" y="220" width="100" height="60"
            fill="white" stroke="#4A90E2" strokeWidth="1" rx="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Designing clarity for complex services.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 mb-12 max-w-2xl"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.6 }}
          >
            Heurisco helps organisations understand messy systems, improve digital journeys, and turn service insight into usable digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm"
            >
              View work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 text-sm"
            >
              Start a conversation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
