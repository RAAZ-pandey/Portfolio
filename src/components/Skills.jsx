
import React from 'react';
import { Code, Database, Globe, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps',
      icon: <Zap className="w-8 h-8" />,
      skills: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Kubernetes'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Tools',
      icon: <Code className="w-8 h-8" />,
      skills: ['Git', 'VS Code', 'Postman', 'Open-AI'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;