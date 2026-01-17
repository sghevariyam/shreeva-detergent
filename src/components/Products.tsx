import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Droplets, Sparkles, UtensilsCrossed, Factory } from 'lucide-react';

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Droplets,
      name: "Washing Machine Liquid",
      benefits: [
        "Deep stain removal",
        "Low foam, fabric-safe",
        "For front load & top load"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      name: "Body Soap",
      benefits: [
        "Long-lasting freshness",
        "Gentle on skin",
        "For daily shower use"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: UtensilsCrossed,
      name: "Dishwash Liquid",
      benefits: [
        "Powerful grease cutting",
        "Gentle on hands",
        "Pleasant fragrance"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Factory,
      name: "Industrial Cleaning Liquid",
      benefits: [
        "Heavy-duty cleaning",
        "For factories & hotels",
        "Commercial strength"
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const productImages = [
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
    <section id="products" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete cleaning solutions for every need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.color}`} />
              
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl mb-4">{product.name}</h3>

                <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#02CF9C' }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Product Range Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl mb-8 text-gray-800 text-center">Our Product Range</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {productImages.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-white to-white/95">
                  <h4 className="text-sm sm:text-base font-medium text-gray-800 text-center">
                    {product.name}
                  </h4>
                </div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all pointer-events-none" style={{ borderColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#02CF9C'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}