import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TransportePersonal } from './components/TransportePersonal';
import { TransporteEjecutivo } from './components/TransporteEjecutivo';
import { WhatsAppButton } from './components/WhatsAppButton';

type ViewType = 'home' | 'transporte-personal' | 'transporte-ejecutivo';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'transporte-personal') {
    return (
      <>
        <TransportePersonal onBack={handleBackToHome} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentView === 'transporte-ejecutivo') {
    return (
      <>
        <TransporteEjecutivo onBack={handleBackToHome} />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToService={(service) => setCurrentView(service)} />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}