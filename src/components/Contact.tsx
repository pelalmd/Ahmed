import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/qr/MQA62RZMUMAIJ1', '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'ahmedsamy.com',
      action: () => window.open('mailto:ahmedsamy.com')
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+201286237914',
      action: () => window.open('tel:+201286237914')
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Egypt-Alexandria',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Reach out for collaborations or projects. I'm always excited to work on new challenges and bring creative ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={info.action || undefined}
              >
                <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-white font-orbitron font-bold mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="text-yellow-400 mb-6 flex justify-center">
                  <MessageCircle size={48} />
                </div>
                
                <h3 className="text-3xl font-orbitron font-black text-white mb-4">
                  Ready to Start?
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Click the button below to start a conversation on WhatsApp. 
                  Let's discuss your project and make something amazing together!
                </p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                >
                  <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Or reach out through other channels</p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => window.open('mailto:ahmed')}
                className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </button>
              <button
                onClick={() => window.open('tel:+201286237914')}
                className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Phone size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;