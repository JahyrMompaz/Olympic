import { motion } from 'motion/react';
import { useRef } from 'react';
import { Building2, Handshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from '../hooks/useInView';
import harzyzLogo from 'figma:asset/fdab8e22b53a93c0f4a5ec82eea6a5ab9d99ec90.png';

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partnerLogos = [
    { name: 'Cemex', logo: 'https://logoeps.com/cemex-logo-vector/22883/'},
    { name: 'Hisense', logo: 'https://worldvectorlogo.com/es/logo/hisense-1'},
    { name: 'Jafra', logo: 'https://mx.linkedin.com/company/jafra-cosmetics?trk=public_profile_profile-section-card_subtitle-click' },
    { name: 'Sultana', logo: 'https://cartonsultana.com/' },
    { name: 'Harzyz Metals', logo: 'https://mx.indeed.com/cmp/Arzyz' },
    { name: 'Instituto Docet', logo: 'https://www.docet.edu.mx/' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

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