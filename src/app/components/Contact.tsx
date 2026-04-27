import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Mail } from 'lucide-react';

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em' }}
          >
            Have a complex service or digital journey to improve?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-12"
            style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            Let's map the problem, clarify the opportunity, and design a better way forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="mailto:hello@heurisco.co.uk"
              className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Start a conversation
            </a>

            <a
              href="mailto:hello@heurisco.co.uk"
              className="text-gray-600 hover:text-black transition-colors"
              style={{ fontSize: '1.0625rem' }}
            >
              hello@heurisco.co.uk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
