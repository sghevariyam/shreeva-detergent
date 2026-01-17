import { motion } from 'motion/react';
import { Droplets } from 'lucide-react';

interface HeroProps {
  onViewProducts: () => void;
  onContact: () => void;
}

export function Hero({ onViewProducts, onContact }: HeroProps) {
  const products = [
    {
      name: 'Washing Machine Liquid',
      image: 'https://images.unsplash.com/photo-1605634591626-d22e59984842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZSUyMGRldGVyZ2VudHxlbnwxfHx8fDE3Njc5NTYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Body Soap',
      image: 'https://images.unsplash.com/photo-1730378616989-499041edc37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwc29hcCUyMGJhcnxlbnwxfHx8fDE3Njc5NTYwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Dishwash Liquid',
      image: 'https://images.unsplash.com/photo-1766988459050-43c843bc43fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNoJTIwc29hcCUyMGJvdHRsZXxlbnwxfHx8fDE3Njc4NjgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Industrial Cleaning Liquid',
      image: 'https://images.unsplash.com/photo-1621331462282-0c890b7c933b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5lciUyMGJvdHRsZXxlbnwxfHx8fDE3Njc5NTYwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            >
              Powerful Cleaning.
              <span className="block" style={{ color: '#02CF9C' }}>Trusted Performance.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Premium detergent and cleaning solutions for home & industry
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={onViewProducts}
                className="px-8 py-4 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#02CF9C' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#01b589'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#02CF9C'}
              >
                View Products
              </button>
              <button
                onClick={onContact}
                className="px-8 py-4 bg-white hover:bg-gray-50 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl"
                style={{ color: '#02CF9C', borderWidth: '2px', borderColor: '#02CF9C' }}
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ borderWidth: '2px', borderColor: '#02CF9C' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#02CF9C' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}