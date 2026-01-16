import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div>
                <h3 className="text-base sm:text-lg" style={{ color: '#2cad54' }}>Olympic</h3>
                <p className="text-xs text-gray-400">Soluciones Empresariales</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Ofrecemos servicios de transporte y logística de alta calidad para impulsar el crecimiento de su empresa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#2cad54' }}>Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Nosotros', 'Socios', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#2cad54' }}>Síguenos</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#7031a0] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Olympic Soluciones Empresariales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}