import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'Engenharia de Computação',
    institution: 'Universidade Federal de Santa Catarina (UFSC)',
    period: 'Em andamento',
    description: 'Formação completa em engenharia de software, algoritmos, estruturas de dados, arquitetura de computadores e sistemas.',
    icon: <FaUniversity className="text-4xl text-primary" />,
  },
  {
    degree: 'Técnico em Automação Industrial',
    institution: 'Instituto Federal de Santa Catarina (IFSC)',
    period: 'Concluído',
    description: 'Formação técnica em automação, eletrônica, CLPs, sistemas de controle e robótica industrial.',
    icon: <FaCertificate className="text-4xl text-primary" />,
  },
  {
    degree: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'SENAC',
    period: 'Concluído',
    description: 'Formação técnica em desenvolvimento de software, banco de dados, programação orientada a objetos e desenvolvimento web.',
    icon: <FaCertificate className="text-4xl text-primary" />,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="min-h-screen bg-primary-dark py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-primary">05.</span> Formação
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-[#112240] p-8 rounded-lg border border-gray-700 hover:border-primary transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                    <p className="text-primary font-semibold mb-2">{item.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">O Que Eu Resolvo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Desenvolvimento de Aplicações Web',
                  description: 'Criação de aplicações escaláveis e modernas usando as melhores tecnologias do mercado.',
                },
                {
                  title: 'Melhoria da Experiência do Usuário',
                  description: 'Design e implementação de interfaces intuitivas que encantam os usuários.',
                },
                {
                  title: 'Interfaces Modernas e Intuitivas',
                  description: 'Desenvolvimento de UI/UX com foco em usabilidade e design responsivo.',
                },
                {
                  title: 'Sistemas Completos',
                  description: 'Desenvolvimento full-stack de sistemas completos, do front-end ao back-end.',
                },
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-[#112240] p-6 rounded-lg border border-gray-700 hover:border-primary transition-all"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">{solution.title}</h4>
                  <p className="text-gray-400">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
