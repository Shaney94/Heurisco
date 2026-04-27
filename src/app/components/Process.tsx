import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand users, services, systems, constraints, and opportunities.',
  },
  {
    number: '02',
    title: 'Map',
    description: 'Visualise journeys, decisions, pain points, dependencies, and service gaps.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Turn insight into prototypes, interfaces, content structures, and service improvements.',
  },
  {
    number: '04',
    title: 'Implement',
    description: 'Support delivery through prioritisation, specifications, iteration, and practical handover.',
  },
];

export function Process() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em' }}
        >
          From messy systems to clear digital direction.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 relative"
            >
              <div className="mb-6 text-gray-300" style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 1 }}>
                {step.number}
              </div>
              <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                {step.title}
              </h3>
              <p className="text-gray-600" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
