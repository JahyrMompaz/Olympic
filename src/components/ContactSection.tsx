import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por contactarnos. Nos comunicaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+52 (81) 8361 606',
      color: '#7031a0',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'itrevino@olympic-se.com',
      color: '#2cad54',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Calle 123 #45-67, Bogotá, Colombia',
      color: '#7031a0',
    },
  ];

  return (
    <section id="contacto" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4" style={{ color: '#7031a0' }}>
            Contacto
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Tu alidado para tu equipo. Contáctenos hoy mismo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl mb-6 sm:mb-8"
              style={{ color: '#7031a0' }}
            >
              Información de Contacto
            </motion.h3>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: info.color }}
                  >
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #7031a0 0%, #2cad54 100%)' }}
            >
              <h4 className="text-white text-lg sm:text-xl mb-2 sm:mb-3">Horario de Atención</h4>
              <p className="text-white/90 text-sm sm:text-base mb-1 sm:mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-white/90 text-sm sm:text-base">Sábados: 9:00 AM - 1:00 PM</p>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6" style={{ color: '#7031a0' }}>
                Envíanos un Mensaje
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    style={{ '--tw-ring-color': '#7031a0' } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    style={{ '--tw-ring-color': '#7031a0' } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    style={{ '--tw-ring-color': '#7031a0' } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ '--tw-ring-color': '#7031a0' } as React.CSSProperties}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg text-white flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#2cad54' }}
                >
                  Enviar Mensaje
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}