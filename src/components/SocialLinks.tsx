import React from 'react';
import { Instagram, Facebook, MessageCircle, Share } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/ahmedsamy1061?igsh=MWltZG12dHRqNjk0cQ==',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/share/1EZBGoENmM/',
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Threads',
      icon: <Share size={24} />,
      url: 'https://www.threads.net/@ahmedsamy1061',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      url: 'https://wa.me/qr/MQA62RZMUMAIJ1',
      color: 'hover:bg-green-500'
    }
  ];

  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8">
            Let's Connect
          </h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-gray-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${link.color}`}
                aria-label={link.name}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-8">
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="https://i.ibb.co/nqXtSsKp/20250701-010237-removebg-preview.png" 
              alt="Ahmed Samy Logo" 
              className="h-8 w-8 object-contain"
            />
            <div className="text-white font-orbitron font-bold text-xl tracking-wide">
              Ahmed Samy
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
          </p>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ahmed Samy. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;