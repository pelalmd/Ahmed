import React from 'react';
import { Download, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-400' },
    { name: 'React', color: 'bg-cyan-400' },
    { name: 'Next.js', color: 'bg-gray-700' },
    { name: 'Sass', color: 'bg-pink-500' },
  ];

  const highlights = [
    {
      icon: <Code className="text-yellow-400" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: <Palette className="text-yellow-400" size={24} />,
      title: 'Creative Design',
      description: 'Turning ideas into beautiful interfaces'
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: 'Modern Tech',
      description: 'Using cutting-edge technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4">
            Who Am I
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate frontend developer who loves creating modern, responsive, 
                and user-friendly web interfaces. My journey in web development is driven 
                by a constant desire to learn new technologies and push the boundaries of 
                what's possible on the web.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in crafting clean, efficient code while maintaining a strong 
                focus on user experience and visual design. Every project I work on is an 
                opportunity to create something beautiful and functional.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-white font-semibold">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* CV Download Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-yellow-400">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-white text-center lg:text-left">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  <div className={`w-3 h-3 ${skill.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
                  <h4 className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                <div className="text-3xl font-orbitron font-black text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                <div className="text-3xl font-orbitron font-black text-yellow-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;