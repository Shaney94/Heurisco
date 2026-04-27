import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-700"
            style={{ fontSize: 'clamp(1.375rem, 3vw, 2rem)', lineHeight: 1.6, letterSpacing: '-0.01em' }}
          >
            Heurisco is built around the idea that better decisions come from better discovery. We help organisations make sense of complex services and translate that understanding into digital experiences that are clearer, more useful, and easier to deliver.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
