import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesSection() {
  const services = [
    {
      id: 'servicio-personal',
      title: 'TRANSPORTE DE PERSONAL',
      description: 'Para que el recurso más importante de tu empresa siempre llegue a tiempo.',
      image: 'https://images.unsplash.com/photo-1536693354796-0d3cfdd4e68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjBzZWF0cyUyMHBhc3NlbmdlcnMlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzY3NzM2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#dc2626' // rojo
    },
    {
      id: 'servicio-ejecutivo',
      title: 'TRANSPORTE EJECUTIVO',
      description: 'La calidad, seguridad y confort, no es un lujo, es una necesidad.',
      image: 'https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjYXIlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3Njc3MzY4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#7031a0' // morado
    }
  ];

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="mb-6 sm:mb-8">
              </div>

              {/* Title */}
              <h2 className="mb-6 sm:mb-8">
                <span className="block text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#2cad54' }}>
                  SOLUCIONES INTEGRALES EN
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#7031a0' }}>
                  TRANSPORTACIÓN<br />
                  Y LOGÍSTICA
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  Equipo altamente <strong>capacitado y experimentado</strong> se encarga de ejecutar cada aspecto de la ruta.
                </p>
                <p>
                  Con <strong>tecnología</strong> y servicio centrado en el cliente, garantizamos el traslado seguro y a tiempo del <strong>personal.</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ 
                  backgroundColor: service.color,
                  clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)'
                }}
              >
                <div className="flex items-center">
                  {/* Image */}
                  <div className="w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 flex-shrink-0">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-4 sm:px-6 py-4">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}