import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import fotoPerfil from '../assets/foto-perfil.jpg';

const ProfileCard = ({ isInView }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="flex justify-center md:justify-end"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
        className="relative w-64 md:w-72 select-none"
      >
        <div
          className="rounded-2xl p-5 flex flex-col items-center gap-5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(108,99,255,0.18)',
            boxShadow: '0 8px 40px rgba(108,99,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.20) 0%, transparent 68%)' }}
            />
            <div
              className="relative w-48 h-48 rounded-full p-[2.5px]"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #a78bfa, #1e1b4b)' }}
            >
              <img
                src={fotoPerfil}
                alt="Victor Iofna Caba"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-white font-semibold text-base">Victor Iofna Caba</p>
            <p className="text-[#6C63FF] text-sm mt-0.5">Full-Stack Developer</p>
          </div>

          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full w-full justify-center"
            style={{
              background: 'rgba(108,99,255,0.08)',
              border: '1px solid rgba(108,99,255,0.20)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <span className="text-gray-300 text-xs font-medium">Disponível para projetos</span>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full">
            {[
              { label: 'UFSC', sub: 'Eng. Computação' },
              { label: 'IFSC', sub: 'Automação Industrial' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl px-3 py-2.5 text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="text-white text-xs font-semibold">{item.label}</p>
                <p className="text-gray-500 text-[10px] mt-0.5 leading-tight">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen bg-[#112240] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-primary">01.</span> Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Desenvolvedor apaixonado por tecnologia, com formação em <span className="text-primary font-semibold">Engenharia de Computação pela UFSC</span>. Crio <span className="text-primary font-semibold">sites modernos e responsivos</span>, sistemas web completos e interfaces centradas no usuário — do conceito ao deploy.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Minha expertise cobre <span className="text-primary font-semibold">desenvolvimento web full-stack</span>: landing pages, e-commerces, dashboards e aplicações SaaS. Combino código limpo com design funcional para entregar produtos digitais de alto impacto.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Com experiência em projetos como <span className="text-primary font-semibold">Projeto Hermes (UFSC)</span> e <span className="text-primary font-semibold">Projeto LANSE</span> com inteligência artificial, busco sempre inovar e aplicar as melhores práticas de desenvolvimento.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Se você precisa de um <span className="text-primary font-semibold">site profissional, sistema web ou aplicação sob medida</span>, estou pronto para transformar sua ideia em produto real — com qualidade e prazo.
              </p>
            </div>

            <ProfileCard isInView={isInView} />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-primary-dark p-6 rounded-lg border border-primary/30 hover:border-primary transition-all"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-300">Projetos Concluídos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-primary-dark p-6 rounded-lg border border-primary/30 hover:border-primary transition-all"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-gray-300">Anos de Experiência</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-primary-dark p-6 rounded-lg border border-primary/30 hover:border-primary transition-all"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-300">Dedicação</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
