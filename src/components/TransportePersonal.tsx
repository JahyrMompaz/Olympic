import { motion, AnimatePresence } from 'motion/react';
import { Users, Clock, Shield, MapPin, CheckCircle, ArrowLeft, X, Send, Loader2, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import axios from 'axios';

interface TransportePersonalProps {
  onBack: () => void;
}

export function TransportePersonal({ onBack }: TransportePersonalProps) {
  const benefits = [
    'Unidades modernas y confortables',
    'App para control de accesos',
    'Video a bordo inteligente',
    'Monitoreo GPS en tiempo real',
    'Seguro de pasajeros incluido',
    'Puntualidad garantizada'
  ];

  const olympicBusImage = "/bus.png";

  const features = [
    { icon: Users, title: 'Capacidad Flexible', description: 'Desde 10 hasta 40 pasajeros por unidad' },
    { icon: Clock, title: 'Horarios Personalizados', description: 'Adaptamos rutas y horarios a sus necesidades' },
    { icon: Shield, title: 'Seguridad Total', description: 'Unidades con sistemas de seguridad avanzados' },
    { icon: MapPin, title: 'Cobertura Amplia', description: 'Servicio en toda el área metropolitana' }
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

  const [status, setStatus] = useState<{ loading: boolean; success: boolean; error: string }>({
    loading: false,
    success: false,
    error: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(apiUrl + '/transporte', formData);
      if (response.status === 200 || response.status === 201) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', numPasajeros: '', mensaje: '' });
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Hubo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ... Hero, Features, Benefits, CTA SE QUEDAN IGUAL ... */}
       <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1536693354796-0d3cfdd4e68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjBzZWF0cyUyMHBhc3NlbmdlcnMlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzY3NzM2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Transporte de Personal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} onClick={onBack} className="flex items-center gap-2 text-white mb-8 hover:text-[#2cad54] transition-colors">
            <ArrowLeft className="w-5 h-5" /> Volver al inicio
          </motion.button>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">Transporte de Personal</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl sm:text-2xl text-white/90 max-w-2xl">Para que el recurso más importante de tu empresa siempre llegue a tiempo</motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ color: '#dc2626' }}>Características del Servicio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Ofrecemos soluciones completas para el transporte de su personal con los más altos estándares de calidad</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#dc2626' }}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#dc2626' }}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl mb-6" style={{ color: '#dc2626' }}>Beneficios de Nuestro Servicio</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div key={benefit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#2cad54' }} />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback src={olympicBusImage} alt="Autobús Olympic - Transporte de Personal" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ backgroundColor: '#dc2626' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl text-white mb-6">¿Listo para mejorar el transporte de su personal?</h2>
            <p className="text-xl text-white/90 mb-8">Contáctenos hoy y descubra cómo podemos optimizar la movilidad de su equipo</p>
            <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-[#dc2626] rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
              {status.loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : <><Send className="w-5 h-5" /> Enviar solicitud</>}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal - AQUÍ ESTÁN LOS CAMBIOS */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl" style={{ color: '#dc2626' }}>Solicitar Cotización</h3>
                <button title='cerrar' onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">Complete el formulario y nos pondremos en contacto con usted</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                {/* TUS INPUTS SE QUEDAN IGUAL (nombre, empresa, email, telefono, numPasajeros, mensaje) */}
                <div><label className="block text-sm text-gray-700 mb-1">Nombre completo *</label><input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all" placeholder="Ej. Juan Pérez" /></div>
                <div><label className="block text-sm text-gray-700 mb-1">Empresa *</label><input type="text" name="empresa" value={formData.empresa} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all" placeholder="Nombre de su empresa" /></div>
                <div><label className="block text-sm text-gray-700 mb-1">Correo electrónico *</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all" placeholder="correo@empresa.com" /></div>
                <div><label className="block text-sm text-gray-700 mb-1">Teléfono *</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all" placeholder="+51 999 999 999" /></div>
                <div><label className="block text-sm text-gray-700 mb-1">Número de pasajeros *</label><input type="number" name="numPasajeros" value={formData.numPasajeros} onChange={handleInputChange} required min="1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all" placeholder="Ej. 25" /></div>
                <div><label className="block text-sm text-gray-700 mb-1">Detalles adicionales</label><textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all resize-none" placeholder="Cuéntenos sobre sus necesidades..." /></div>
              </div>

              {/* SECCIÓN NUEVA: MENSAJES DE ESTADO */}
              <AnimatePresence>
                {status.success && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Solicitud enviada correctamente.
                  </motion.div>
                )}
                {status.error && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> {status.error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancelar</button>
                <button type="submit" disabled={status.loading} className={`flex-1 px-6 py-3 text-white rounded-lg transition-all hover:shadow-lg flex justify-center items-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`} style={{ backgroundColor: '#dc2626' }}>
                   {status.loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}