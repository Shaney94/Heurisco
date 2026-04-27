import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <div className="text-lg tracking-tight" style={{ fontWeight: 500 }}>
          Heurisco
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-gray-600 hover:text-black transition-colors">Work</a>
          <a href="#services" className="text-sm text-gray-600 hover:text-black transition-colors">Services</a>
          <a href="#process" className="text-sm text-gray-600 hover:text-black transition-colors">Process</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">About</a>
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 border border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
