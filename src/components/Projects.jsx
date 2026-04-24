import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import projetoFinance from '../assets/projeto-finance.png';
import projetoMips from '../assets/projeto-mips.jpg';
import projetoPartiuviagem from '../assets/projeto-partiuviagem.png';
import designBurguer from '../assets/design-burguer.png';
import designMockup from '../assets/design-mockup.png';
import designMarketing from '../assets/design-marketing.png';
import designBanner from '../assets/design-banner.png';
import hardwareRobot from '../assets/hardware-robot.png';
import fotoCoding from '../assets/foto-coding.jpg';

const projects = [
  {
    category: 'software',
    featured: true,
    title: 'CabaMenu – SaaS de Cardápio Digital',
    description: 'SaaS de cardápio digital com QR Code, pedidos automatizados via WhatsApp e painel administrativo.',
    image: '/cabamenu.jpeg',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/Iofna',
    demo: 'https://portfolio-victor-iofna.vercel.app/',
  },
  {
    category: 'software',
    title: 'Caba Barber Shop – Sistema de Agendamento',
    description: 'Plataforma de agendamentos para barbearias com dashboard de clientes, pagamentos e agenda online.',
    image: '/caba-barber.png',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Iofna',
    demo: 'https://portfolio-victor-iofna.vercel.app/',
  },
  {
    category: 'software',
    title: 'UniConnect – Plataforma Educacional',
    description: 'Plataforma que conecta estudantes, professores e oportunidades acadêmicas em um fluxo digital moderno.',
    image: '/uniconnect.png',
    tech: ['React', 'Firebase', 'UI/UX'],
    github: 'https://github.com/Iofna',
    demo: '#',
  },
  {
    category: 'software',
    featured: true,
    title: 'VikiStyles – Plataforma de E-commerce Moderna',
    description: 'Plataforma de e-commerce com autenticação, carrinho, checkout e painel administrativo para lojistas.',
    image: '/vikistyles.png',
    tech: ['Next.js', 'React', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/Iofna',
    demo: '#',
  },
  {
    category: 'software',
    title: 'Projeto Hermes (UFSC)',
    description: 'Plataforma de colaboração acadêmica com foco em experiência do usuário.',
    image: fotoCoding,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'Projeto LANSE',
    description: 'Sistema de análise preditiva para previsão de evasão acadêmica.',
    image: projetoMips,
    tech: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'Finance App',
    description: 'Aplicativo de controle financeiro com painéis e relatórios.',
    image: projetoFinance,
    tech: ['C++', 'Qt', 'SQLite'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'PartIuviagem365 – Plataforma de Viagens',
    description: 'Plataforma de viagens com catálogo de destinos, reservas e gerenciamento de pacotes.',
    image: projetoPartiuviagem,
    tech: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/Iofna',
    demo: 'https://www.instagram.com/partiu_viagem_365_dias/',
  },
  {
    category: 'design',
    title: 'Identidade Visual – Marketing',
    description: 'Identidade visual completa para campanhas e materiais de marca.',
    image: designMarketing,
    tech: ['Photoshop', 'Illustrator', 'Figma'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Mockup – Coleção de Moda',
    description: 'Mockups profissionais para apresentação de coleções de moda.',
    image: designMockup,
    tech: ['Photoshop', 'Lightroom'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Design para Redes Sociais',
    description: 'Artes para redes sociais, posts e campanhas digitais.',
    image: designBanner,
    tech: ['Photoshop', 'Canva', 'After Effects'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Arte Publicitária – Burguer',
    description: 'Peça publicitária para produto alimentício com apelo visual e composição profissional.',
    image: designBurguer,
    tech: ['Photoshop', 'Illustrator'],
    github: '#',
    demo: '#',
  },
  {
    category: 'hardware',
    title: 'Robô Educacional EV3',
    description: 'Robô educacional programado para uso acadêmico e demonstrações técnicas.',
    image: hardwareRobot,
    tech: ['LEGO EV3', 'C++', 'Scratch'],
    github: 'https://github.com/Iofna',
    demo: '#',
  },
];

const categoryConfig = {
  all:      { label: 'Todos',               icon: '🗂️',  border: 'border-[#6C63FF]', bg: 'bg-[#6C63FF]' },
  software: { label: 'Software',             icon: '💻',  border: 'border-purple-500', bg: 'bg-purple-600' },
  design:   { label: 'Design Gráfico',       icon: '🎨',  border: 'border-blue-500',   bg: 'bg-blue-600'   },
  hardware: { label: 'Hardware (Futuro)',     icon: '⚙️',  border: 'border-green-500',  bg: 'bg-green-600'  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen bg-[#112240] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-[#6C63FF]">04.</span> Projetos
          </h2>
          <div className="w-20 h-1 bg-[#6C63FF] mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(categoryConfig).map(([id, cfg]) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 border ${
                  activeCategory === id
                    ? `${cfg.bg} text-white ${cfg.border}`
                    : `bg-[#0A192F] text-gray-300 border-gray-700 hover:${cfg.border} hover:text-white`
                }`}
              >
                {cfg.icon} {cfg.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.65 }}
                whileHover={{ scale: project.featured ? 1.04 : 1.01 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-gray-800 bg-[#0A192F]/90 shadow-[0_22px_56px_-40px_rgba(108,99,255,0.8)] transition-all duration-500 ${project.featured ? 'border-[#FF8A00] shadow-[0_30px_90px_-30px_rgba(255,138,0,0.35)]' : 'hover:border-[#6C63FF]/60'}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 ease-out brightness-90 contrast-[1.05] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => project.demo === '#' && e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6C63FF]/20 transition-all duration-300 hover:bg-[#5a52e6]"
                    >
                      <FaExternalLinkAlt /> Ver Projeto
                    </a>
                  </div>

                  <div className="absolute left-4 top-4 space-y-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_-20px_rgba(255,138,0,0.8)]">
                        🔥 Destaque
                      </span>
                    )}
                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${
                      project.category === 'software' ? 'bg-purple-600/95' :
                      project.category === 'design'   ? 'bg-blue-600/95'   : 'bg-green-600/95'
                    }`}>
                      {categoryConfig[project.category].icon} {categoryConfig[project.category].label}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-[#0A192F]/95 via-[#0A192F]/80 to-[#08101f]/95">
                  <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-[#9b7cff]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-5 leading-7 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-[#d2c5ff] shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 hover:text-white"
                    >
                      <FaGithub /> Ver Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => project.demo === '#' && e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 hover:text-white"
                    >
                      <FaExternalLinkAlt /> Ver Projeto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-gray-400 mb-4">Mais projetos disponíveis no GitHub</p>
            <a
              href="https://github.com/Iofna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF]/10 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <FaGithub /> Ver GitHub Completo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
