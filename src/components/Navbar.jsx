import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#education', label: 'Formação' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-primary">Dev</span> Victor <span className="text-primary">VP</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-primary transition-colors font-medium"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/Victor_Iofna_Caba_CV.pdf"
              download
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Currículo
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-primary-dark/98 backdrop-blur-lg shadow-2xl"
          >
            <div className="flex flex-col p-8 pt-20">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary transition-colors font-medium py-4 border-b border-gray-700"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/Victor_Iofna_Caba_CV.pdf"
                download
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all text-center"
              >
                Baixar Currículo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
