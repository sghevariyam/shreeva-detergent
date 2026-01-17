import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Home, Utensils, Hotel, Building2, Store } from 'lucide-react';

export function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const applications = [
    {
      icon: Home,
      title: "Home Laundry",
      image: "https://images.unsplash.com/photo-1646013976311-d7de74c2f679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwZGV0ZXJnZW50JTIwYm90dGxlfGVufDF8fHx8MTc2Nzg1NTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Utensils,
      title: "Kitchen Cleaning",
      image: "https://images.unsplash.com/photo-1736433622548-4adbbc1c2cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGtpdGNoZW4lMjBkaXNod2FzaGluZ3xlbnwxfHx8fDE3Njc4NTU0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Hotel,
      title: "Hotels & Restaurants",
      image: "https://images.unsplash.com/photo-1563456019498-843e11bdaae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5pbmclMjBmYWN0b3J5fGVufDF8fHx8MTc2Nzg1NTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Building2,
      title: "Industrial Floors & Machinery",
      image: "https://images.unsplash.com/photo-1563456019498-843e11bdaae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5pbmclMjBmYWN0b3J5fGVufDF8fHx8MTc2Nzg1NTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Store,
      title: "Commercial Spaces",
      image: "https://images.unsplash.com/photo-1563456019498-843e11bdaae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5pbmclMjBmYWN0b3J5fGVufDF8fHx8MTc2Nzg1NTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Applications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Versatile solutions for every cleaning need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg">{app.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}