
import React from 'react';
import { Award, Coffee, Users, Zap } from 'lucide-react';
import profileImg from "../assets/dp.png";

const About = () => {
  const stats = [
    { icon: <Zap className="w-6 h-6" />, number: '10+', label: 'Projects Completed' },
    { icon: <Users className="w-6 h-6" />, number: '0', label: 'Happy Clients' },
    { icon: <Coffee className="w-6 h-6" />, number: '0', label: 'Cups of Coffee' },
    { icon: <Award className="w-6 h-6" />, number: 'Fresher', label: 'Experience Level' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer eager to start my career 
              creating digital solutions that make a difference. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;