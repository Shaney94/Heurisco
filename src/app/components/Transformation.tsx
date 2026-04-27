import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Search, Palette, CheckCircle } from 'lucide-react';

const points = [
  { icon: Search, title: 'Understand the system' },
  { icon: Palette, title: 'Design the experience' },
  { icon: CheckCircle, title: 'Support practical change' },
];

export function Transformation() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            className="mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em' }}
          >
            UX, service design, and transformation working together.
          </h2>
          <p
            className="text-gray-400 max-w-3xl"
            style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            Digital problems rarely sit only on the screen. We look at the wider service system, including user needs, content, operations, technology, handoffs, and delivery constraints.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/20">
                <point.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4 }}>
                {point.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
