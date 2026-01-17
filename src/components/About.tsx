import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Sparkles, Heart } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Tough on stains",
      description: "Powerful formulation that removes the toughest stains"
    },
    {
      icon: Heart,
      title: "Gentle on hands & fabrics",
      description: "Safe for everyday use, gentle on skin and clothes"
    },
    {
      icon: Sparkles,
      title: "Suitable for daily and industrial use",
      description: "Versatile solutions for home and commercial needs"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">About Shreeva</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shreeva Detergent is committed to delivering quality, effectiveness, and reliability
            in every product. Our modern formulations combine powerful cleaning technology with
            safety and care, making us the trusted choice for households and industries alike.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#02CF9C' }}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}