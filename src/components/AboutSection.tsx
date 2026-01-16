import { motion } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Brindar soluciones de transporte y logística que superen las expectativas de nuestros clientes, garantizando eficiencia y confiabilidad.',
      color: '#7031a0',
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      description: 'Ser la empresa líder en soluciones empresariales de logística, reconocida por nuestra excelencia operativa y compromiso con la innovación.',
      color: '#2cad54',
    },
    {
      icon: Award,
      title: 'Nuestros Valores',
      description: 'Integridad, compromiso, responsabilidad y excelencia en cada servicio que ofrecemos a nuestros clientes.',
      color: '#7031a0',
    },
    {
      icon: Users,
      title: 'Nuestro Equipo',
      description: 'Contamos con un equipo altamente capacitado y comprometido con la satisfacción de nuestros clientes y la calidad del servicio.',
      color: '#2cad54',
    },
  ];

  return (
    <section id="nosotros" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4" style={{ color: '#7031a0' }}>
            Nosotros
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Olympic Soluciones Empresariales es una compañía dedicada a la prestación de servicios de transporte y logística de alta calidad, con más de 15 años de experiencia en el mercado.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: value.color }}
              >
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3" style={{ color: value.color }}>
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2"
              style={{ color: '#7031a0' }}
            >
              500+
            </motion.p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2"
              style={{ color: '#2cad54' }}
            >
              10K+
            </motion.p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Envíos Realizados</p>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2"
              style={{ color: '#7031a0' }}
            >
              50+
            </motion.p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Vehículos</p>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2"
              style={{ color: '#2cad54' }}
            >
              99%
            </motion.p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Satisfacción</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}