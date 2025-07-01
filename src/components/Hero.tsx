import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-yellow-400 font-medium text-lg sm:text-xl tracking-wide">
                Hello, My Name Is
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-black text-white leading-tight">
                Ahmed Samy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                A passionate and creative{' '}
                <span className="text-yellow-400 font-semibold">frontend web developer</span>
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
              >
                Contact Me
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-4 shadow-2xl">
                <img
                  src="<a href="https://imgbb.com/"><img src="https://i.ibb.co/YT3dQXxf/Whats-App-Image-2025-07-01-at-8-01-22-PM-removebg-preview.png" alt="Whats-App-Image-2025-07-01-at-8-01-22-PM-removebg-preview" border="0"></a>"
                  alt="Ahmed Samy"
                  className="w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;