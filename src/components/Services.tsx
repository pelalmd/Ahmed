import React from 'react';
import { Palette, Code2, Smartphone, Award, Headphones, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Beautiful and modern designs that capture your brand essence'
    },
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable, and scalable code solutions'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'UI/UX',
      description: 'User-centered design for exceptional digital experiences'
    },
    {
      icon: <Award size={32} />,
      title: 'Branding',
      description: 'Consistent brand identity across all digital platforms'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Fast Support',
      description: '24/7 support and quick response to your needs'
    },
    {
      icon: <Layout size={32} />,
      title: 'Responsive Layouts',
      description: 'Perfect compatibility across all devices and screen sizes'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I offer comprehensive frontend development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-0.5 bg-yellow-400"></div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how I can help bring your ideas to life
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;