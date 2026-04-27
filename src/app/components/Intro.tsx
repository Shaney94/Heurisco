import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Intro() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              Better digital experiences start with clearer understanding.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-gray-600" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              We combine UX design, service design, systems thinking, and practical delivery to help teams move from uncertainty to action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
