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
    title: 'Projeto Hermes (UFSC)',
    description: 'Plataforma de colaboração acadêmica com foco em experiência do usuário. Sistema completo para gestão de projetos universitários.',
    image: fotoCoding,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'Projeto LANSE',
    description: 'Sistema com inteligência artificial para previsão de evasão acadêmica. Machine learning para análise preditiva.',
    image: projetoMips,
    tech: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'Finance App',
    description: 'Aplicação completa de controle financeiro com banco de dados SQLite, interface moderna e relatórios detalhados.',
    image: projetoFinance,
    tech: ['C++', 'Qt', 'SQLite'],
    github: 'https://github.com/Iofna',
    demo: 'https://github.com/Iofna',
  },
  {
    category: 'software',
    title: 'PartIuviagem365 – App de Viagens',
    description: 'Sistema completo para agência de viagens com catálogo de destinos, reservas e gestão de pacotes.',
    image: projetoPartiuviagem,
    tech: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/Iofna',
    demo: 'https://www.instagram.com/partiu_viagem_365_dias/',
  },
  {
    category: 'design',
    title: 'Identidade Visual – Marketing',
    description: 'Criação de identidade visual completa para marca, incluindo logo, paleta de cores e materiais gráficos.',
    image: designMarketing,
    tech: ['Photoshop', 'Illustrator', 'Figma'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Mockup – Coleção de Moda',
    description: 'Desenvolvimento de mockups profissionais para linha de vestuário, utilizados em campanhas e apresentações.',
    image: designMockup,
    tech: ['Photoshop', 'Lightroom'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Design para Redes Sociais',
    description: 'Criação de artes profissionais para redes sociais: posts, banners, stories e materiais de marketing digital.',
    image: designBanner,
    tech: ['Photoshop', 'Canva', 'After Effects'],
    github: '#',
    demo: '#',
  },
  {
    category: 'design',
    title: 'Arte Publicitária – Burguer',
    description: 'Peça publicitária para produto alimentício com tratamento de imagem profissional e composição visual atraente.',
    image: designBurguer,
    tech: ['Photoshop', 'Illustrator'],
    github: '#',
    demo: '#',
  },
  {
    category: 'hardware',
    title: 'Robô Educacional EV3',
    description: 'Desenvolvimento de robô educacional com LEGO EV3 para fins acadêmicos, incluindo programação e montagem.',
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
                transition={{ delay: index * 0.08 }}
                className="bg-[#0A192F] rounded-xl overflow-hidden border border-gray-800 hover:border-[#6C63FF]/60 transition-all group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A192F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => project.demo === '#' && e.preventDefault()}
                      className="px-5 py-2 bg-[#6C63FF] text-white rounded-lg font-semibold text-sm hover:bg-[#5a52e6] transition-colors flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Ver Projeto
                    </a>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white ${
                      project.category === 'software' ? 'bg-purple-700' :
                      project.category === 'design'   ? 'bg-blue-700'   : 'bg-green-700'
                    }`}>
                      {categoryConfig[project.category].icon} {categoryConfig[project.category].label}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6C63FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-0.5 bg-[#112240] text-[#6C63FF] text-xs rounded-full border border-[#6C63FF]/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2 border-t border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-[#6C63FF] transition-colors text-sm"
                    >
                      <FaGithub /> Ver Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => project.demo === '#' && e.preventDefault()}
                      className="flex items-center gap-1.5 text-gray-400 hover:text-[#6C63FF] transition-colors text-sm"
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
