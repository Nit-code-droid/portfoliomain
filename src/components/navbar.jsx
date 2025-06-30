import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
 <nav className="fixed top-4 left-1/8 right-1/8 z-50 rounded-lg bg-white backdrop-blur-md border border-amber-500 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <span className="text-2xl text-amber-500 font-bold gradient-text">/NitCode</span>
      </div>

      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-white bg-amber-500'
                  : 'text-amber-500 hover:text-white hover:bg-amber-500'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-white/80 transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {isOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-t border-white/20 rounded-b-lg">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeSection === item.href.substring(1)
                ? 'text-white bg-white/20'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navigation;
