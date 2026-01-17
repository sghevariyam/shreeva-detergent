import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChoose } from './components/WhyChoose';
import { Applications } from './components/Applications';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for any fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={scrollToSection} />
      <Hero 
        onViewProducts={() => scrollToSection('products')}
        onContact={() => scrollToSection('contact')}
      />
      <About />
      <Products />
      <WhyChoose />
      <Applications />
      <CTA onContact={() => scrollToSection('contact')} />
      <Contact />
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}