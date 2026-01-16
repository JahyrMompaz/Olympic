import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

type ViewType = 'home' | 'transporte-personal' | 'transporte-ejecutivo';

interface HeaderProps {
  onNavigateToService?: (view: ViewType) => void;
}

export function Header({ onNavigateToService }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const serviceItems = [
    { id: 'transporte-personal' as ViewType, label: 'Transporte de Personal' },
    { id: 'transporte-ejecutivo' as ViewType, label: 'Transporte Ejecutivo' },
  ];

  const handleServiceClick = (serviceId: ViewType) => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
    if (onNavigateToService) {
      onNavigateToService(serviceId);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios', hasDropdown: true },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'socios', label: 'Socios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'px-4 sm:px-6 lg:px-8 pt-4' : ''}`}>
      <div 
        className={`mx-auto backdrop-blur-sm shadow-sm transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-7xl rounded-lg' : ''}`} 
        style={{ backgroundColor: isScrolled ? 'rgba(112, 49, 160, 0.85)' : '#7031a0' }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-lg text-white hover:opacity-80 transition-opacity"
                >
                  Olympic
                </button>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className="text-white hover:text-[#2cad54] transition-colors duration-200 relative group flex items-center gap-1"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2cad54] group-hover:w-full transition-all duration-300"></span>
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 w-56"
                        >
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {serviceItems.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#7031a0] hover:text-white transition-colors duration-200"
                              >
                                {service.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-white hover:text-[#2cad54] transition-colors duration-200 relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2cad54] group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left py-3 px-4 text-white hover:bg-white/10 hover:text-[#2cad54] transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                      <div className="bg-white/5 ml-4">
                        {serviceItems.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="block w-full text-left py-2 px-4 text-white/80 text-sm hover:bg-white/10 hover:text-[#2cad54] transition-colors duration-200"
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-3 px-4 text-white hover:bg-white/10 hover:text-[#2cad54] transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
}