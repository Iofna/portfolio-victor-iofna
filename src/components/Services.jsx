import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const services = [
  {
    icon: '🌐',
    title: 'Sites Institucionais',
    description: 'Sites profissionais para empresas e marcas pessoais, com design moderno, SEO otimizado e carregamento rápido.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    description: 'Páginas de conversão de alta performance, focadas em capturar leads e vender produtos ou serviços.',
    tags: ['React', 'Animações', 'SEO'],
  },
  {
    icon: '⚙️',
    title: 'Sistemas Web',
    description: 'Aplicações web completas com autenticação, banco de dados, painel administrativo e API própria.',
    tags: ['Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    icon: '📊',
    title: 'Dashboards',
    description: 'Painéis de controle interativos com gráficos em tempo real, filtros e visualização de dados estratégicos.',
    tags: ['React', 'Charts', 'MongoDB'],
  },
  {
    icon: '☁️',
    title: 'Aplicações SaaS',
    description: 'Plataformas escaláveis com planos de assinatura, multi-tenancy e infraestrutura na nuvem.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    icon: '🎨',
    title: 'UI/UX & Design',
    description: 'Criação de interfaces intuitivas e identidades visuais — wireframes, protótipos e design system completo.',
    tags: ['Figma', 'Photoshop', 'Design System'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="bg-[#0A192F] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-[#6C63FF]">02.</span> O Que Eu Desenvolvo
          </h2>
          <div className="w-20 h-1 bg-[#6C63FF] mx-auto mb-4"></div>
          <p className="text-gray-400 text-center text-lg mb-14 max-w-2xl mx-auto">
            Soluções digitais completas — do design ao servidor, entregues com qualidade e prazo.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#112240] rounded-xl p-6 border border-gray-800 hover:border-[#6C63FF]/60 transition-all duration-300"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6C63FF]/0 to-[#6C63FF]/0 group-hover:from-[#6C63FF]/5 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6C63FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs border border-[#6C63FF]/25 text-[#6C63FF] bg-[#6C63FF]/08"
                        style={{ background: 'rgba(108,99,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-14 text-center"
          >
            <p className="text-gray-400 mb-5 text-lg">
              Precisa de um site ou sistema profissional?
            </p>
            <a
              href="https://wa.me/5548999397911?text=Olá%20Victor!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20criar%20um%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-900/30 text-lg"
            >
              <FaWhatsapp className="text-xl" /> Vamos criar seu site?
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
