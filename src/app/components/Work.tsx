import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'University digital journey audit',
    description: 'Improving student-facing digital journeys through UX review, content analysis, and journey mapping.',
    category: 'UX audit / Higher education',
  },
  {
    title: 'Short course booking experience review',
    description: 'Benchmarking discovery, booking, payment, and trust cues across competing university short-course journeys.',
    category: 'UX research / Conversion',
  },
  {
    title: 'Service website redesign',
    description: 'Restructuring a service organization\'s website to improve clarity, navigation, accessibility, and user confidence.',
    category: 'Service design / Website redesign',
  },
];

export function Work() {
  const { ref, isInView } = useInView();

  return (
    <section id="work" ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Selected work</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Recent projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 p-10 lg:p-16">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="pr-8 group-hover:translate-x-2 transition-transform duration-500"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 500, lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-600 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>

                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-auto md:min-h-[250px]">
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-px bg-gray-300 w-full opacity-50" style={{ width: `${100 - i * 15}%` }} />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-16 h-16 border border-gray-300 bg-white/50" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
