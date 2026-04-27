import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Map, Layers, Network, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Map,
    title: 'Service Design',
    description: 'Mapping journeys, touchpoints, handoffs, pain points, and operational realities.',
  },
  {
    icon: Layers,
    title: 'UX and UI Design',
    description: 'Designing clear, accessible, user-centred interfaces for websites, platforms, and digital products.',
  },
  {
    icon: Network,
    title: 'Information Architecture',
    description: 'Structuring complex content, navigation, and user flows so people can find and act with confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'Connecting user needs, organisational goals, and implementation constraints into practical digital change.',
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 hover:border-black hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6 w-10 h-10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                {service.title}
              </h3>
              <p className="text-gray-600" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
