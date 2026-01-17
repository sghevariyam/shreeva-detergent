import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Droplets, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Products', section: 'products' },
    { label: 'Contact', section: 'contact' }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #02CF9C, #00bfa5)' }}>
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                Shreeva Detergent
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#02CF9C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2 text-white rounded-lg transition-all transform hover:scale-105"
                style={{ backgroundColor: '#02CF9C' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#01b589'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#02CF9C'}
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-left py-2 text-gray-700 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#02CF9C'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 text-white rounded-lg transition-all text-center"
              style={{ backgroundColor: '#02CF9C' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#01b589'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#02CF9C'}
            >
              Get Quote
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
}