import { motion } from 'motion/react';
import { useRef } from 'react';
import { Building2, Handshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from '../hooks/useInView';

export function PartnersSection() {
  const ref = useRef<HTMLElement>(null!);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partnerLogos = [
    { name: 'Cemex', logo: '/logos/cemex.png' },
    { name: 'Hisense', logo: '/logos/hisense.svg' },
    { name: 'Jafra', logo: '/logos/jafra.png' },
    { name: 'Sultana', logo: '/logos/sultana.png' },
    { name: 'Harzyz Metals', logo: '/logos/arzyz.png' },
    { name: 'Instituto Docet', logo: '/logos/docet.png' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="socios" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4" style={{ color: '#7031a0' }}>
            Nuestros Socios
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Trabajamos con las mejores empresas del sector para ofrecer soluciones integrales y de calidad superior.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 sm:p-10 h-40 sm:h-48 flex items-center justify-center group">
                    <ImageWithFallback
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}