import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/a13437646418926db39dcdcb8f859e105316ec4f.png';
import vehicleImage from 'figma:asset/0fbb110873882429569c35697c0f45ca1f2f7753.png';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 relative overflow-hidden bg-white">
      {/* Diagonal Background Shape with Image */}
      <div 
        className="absolute top-0 right-0 w-full md:w-3/4 lg:w-1/2 h-full"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        {/* Vehicle Image covering the entire diagonal area */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={vehicleImage}
            alt="Vehículo de transporte Olympic"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] sm:min-h-[600px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8"
            >
              <img 
                src={logoImage} 
                alt="Olympic Logo" 
                className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight"
            >
              <span style={{ color: '#2cad54' }}><strong>TU OPCIÓN </strong></span>
              <span style={{ color: '#7031a0' }}>EN<br />TRANSPORTE</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-lg"
            >
              Con más de <strong>12 años de experiencia</strong>, proporcionando{' '}
              <strong>servicios de transporte y logística de alta calidad</strong>, cubriendo de forma 
              personalizada la necesidades de cada uno de nuestros clientes.
            </motion.p>

            {/* Features with Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-8 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-xl text-gray-800">Calidad</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-xl text-gray-800">Seguridad</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={scrollToContact}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
                style={{ backgroundColor: '#7031a0' }}
              >
                Contáctanos
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-20 flex items-center justify-center lg:justify-end order-1 lg:order-2"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}