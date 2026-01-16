import { motion } from 'motion/react';
import { Star, Shield, Clock, Briefcase, CheckCircle, ArrowLeft, Car, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import executiveVehicleImage from 'figma:asset/3754dbd6bcbadf0052edaa08f46f890924f97be4.png';

interface TransporteEjecutivoProps {
  onBack: () => void;
}

export function TransporteEjecutivo({ onBack }: TransporteEjecutivoProps) {
  const benefits = [
    'Modelos recientes',
    'Unidades climatizadas',
    'Asientos de tela',
    'Cinturones de seguridad',
    'Seguro de daños y responsabilidad civil',
    'Permisos estatales y federales'
  ];

  const features = [
    {
      icon: Car,
      title: 'Transporte Ejecutivo Premium',
      description: 'Servicios de transporte ejecutivo que redefinen el estándar de comodidad para desplazamientos empresariales.'
    },
    {
      icon: Shield,
      title: 'Servicio Integral',
      description:'Desde traslados al aeropuerto hasta reuniones de negocios, cada detalle se cuida para garantizar satisfacción y conveniencia.'
    },
    {
      icon: Clock,
      title: 'Experiencia Excepcional',
      description: 'Con una flota de vehículos de alta gama, y conductores capacitados, ofrecemos una experiencia de viaje excepcional que refleja el profesionalismo de tu empresa.'
    },
    {
      icon: Briefcase,
      title: 'Capacidad Flexible',
      description: 'Contamos con unidades con capacidad para de 1 hasta 10 pasajeros.'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    numPasajeros: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsModalOpen(false);
    // Resetear el formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      numPasajeros: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjYXIlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3Njc3MzY4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Transporte Ejecutivo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7031a0]/90 to-[#7031a0]/60"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-white mb-8 hover:text-[#2cad54] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Transporte Ejecutivo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 max-w-2xl"
          >
            La calidad, seguridad y confort no es un lujo, es una necesidad
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ color: '#7031a0' }}>
              Servicios Exclusivos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencia premium diseñada para ejecutivos y profesionales que valoran la excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-6"
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#e8dff5' }}
                >
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: '#7031a0' }} />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <ImageWithFallback
                src={executiveVehicleImage}
                alt="Vehículo ejecutivo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl mb-6" style={{ color: '#7031a0' }}>
                ¿Por qué elegir nuestro servicio ejecutivo?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#2cad54' }} />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#7031a0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Experimente el transporte ejecutivo de clase mundial
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Reserve su servicio hoy y viaje con el estilo que merece
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-[#7031a0] rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Solicitar Servicio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl" style={{ color: '#7031a0' }}>Solicitar Servicio Ejecutivo</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">Complete el formulario y nos pondremos en contacto con usted</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all"
                    placeholder="Nombre de su empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all"
                    placeholder="correo@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Número de pasajeros *</label>
                  <input
                    type="number"
                    name="numPasajeros"
                    value={formData.numPasajeros}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all"
                    placeholder="1 - 10 pasajeros"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Detalles adicionales</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7031a0] focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntenos sobre sus necesidades: destino, fecha, hora, servicios especiales, etc."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 text-white rounded-lg transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#7031a0' }}
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}