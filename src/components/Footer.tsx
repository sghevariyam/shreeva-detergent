import { Droplets } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #02CF9C, #00bfa5)' }}>
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Shreeva Detergent</span>
            </div>
            <p className="text-gray-400">
              Powerful Cleaning. Trusted Performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => onNavigate('home')}
                className="block text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#02CF9C'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="block text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#02CF9C'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
              >
                Products
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="block text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#02CF9C'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@shreevadetergent.com</p>
              <p>Surat, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shreeva Detergent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}