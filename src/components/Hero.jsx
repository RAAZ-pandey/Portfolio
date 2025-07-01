
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Rajkumar Pandey
          </h1>
          <div className="text-2xl md:text-3xl mb-6 h-12 flex items-center justify-center">
            <span className="font-light">{text}</span>
            {isTyping && <span className="ml-1 animate-pulse">|</span>}
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
           Full stack developer in progress, fueled by curiosity and caffeine. <br />
              I bridge frontend creativity with backend logic. <br />
          Whether it’s styling components or structuring databases, I’m all in. <br />
              Still a student - of everything i don't know
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <a href="https://github.com/RAAZ-pandey"
               target="_blank"
            >
              View My Work
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-gray-800 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            <a 
                href="https://drive.google.com/file/d/1P4mS9lWmm2vjHl91oMSGDRIGoAAOkax7/view?usp=sharing" 
                target="_blank"
                
              >
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a href="https://github.com/RAAZ-pandey" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/raaz-6a5a492b3/" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rajkumarpandey32370@gmail.com" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;