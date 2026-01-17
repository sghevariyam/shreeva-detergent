import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, DollarSign, Users, Shield, Package } from 'lucide-react';

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "High-quality formulation",
      description: "Advanced cleaning technology backed by research"
    },
    {
      icon: DollarSign,
      title: "Cost-effective solutions",
      description: "Premium quality at competitive prices"
    },
    {
      icon: Users,
      title: "Trusted by thousands",
      description: "Preferred by households & businesses nationwide"
    },
    {
      icon: Shield,
      title: "Hygienic & safe cleaning",
      description: "Safe for your family and the environment"
    },
    {
      icon: Package,
      title: "Bulk supply available",
      description: "Flexible packaging for dealers and enterprises"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Why Choose Shreeva</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Excellence in every drop, trusted by professionals and families
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-teal-50 transition-all group"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg" style={{ background: 'linear-gradient(to bottom right, #02CF9C, #00bfa5)' }}>
                <feature.icon className="w-10 h-10 text-white" />
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