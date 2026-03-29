import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/foto-perfil.jpg';
import fotoCoding from '../assets/foto-coding.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C63FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#6C63FF] text-lg font-medium mb-3"
            >
              Olá, meu nome é
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Victor Iofna Caba
            </motion.h1>

            <div className="h-16 mb-6 flex items-center">
              <TypeAnimation
                sequence={[
                  'Desenvolvedor Full-Stack',
                  2000,
                  'Especialista em Front-End',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-[#6C63FF]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl"
            >
              Crio aplicações web completas e sites modernos — do design à entrega. Visão completa: Software + Design + Engenharia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-[#6C63FF] hover:bg-[#5a52e6] text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#6C63FF]/30"
              >
                Ver Projetos
              </a>
              <a
                href="/Victor_Iofna_Caba_CV.pdf"
                download
                className="px-7 py-3.5 bg-transparent border-2 border-[#6C63FF] hover:bg-[#6C63FF]/10 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FaFileDownload /> Baixar Currículo
              </a>
              <a
                href="https://wa.me/5548999397911"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-green-900/30"
              >
                <FaWhatsapp /> Fale comigo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-5"
            >
              <a href="https://github.com/Iofna" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all text-xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/victor-iofna-caba/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all text-xl">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/5548999397911" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-500 transition-all text-xl">
                <FaWhatsapp />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#6C63FF] to-purple-800 rounded-full opacity-20 blur-xl animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6C63FF] to-purple-800 p-1">
                  <img
                    src={fotoPerfil}
                    alt="Victor Iofna Caba"
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 -left-4 bg-[#112240] border border-[#6C63FF]/40 rounded-xl px-4 py-2.5 shadow-xl"
                >
                  <p className="text-xs text-gray-400">Tecnologias</p>
                  <p className="text-white font-semibold text-sm">React · Node · Flutter</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -top-4 -right-4 bg-[#112240] border border-[#6C63FF]/40 rounded-xl px-4 py-2.5 shadow-xl"
                >
                  <p className="text-xs text-gray-400">Localização</p>
                  <p className="text-white font-semibold text-sm">Araranguá, SC 🇧🇷</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="mt-8 relative overflow-hidden rounded-2xl border border-gray-700 shadow-2xl w-72 md:w-80"
              >
                <img
                  src={fotoCoding}
                  alt="Victor codando"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-semibold text-sm">Desenvolvendo com Flutter</p>
                  <p className="text-[#6C63FF] text-xs">UFSC · Araranguá</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-[#6C63FF] transition-colors">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
