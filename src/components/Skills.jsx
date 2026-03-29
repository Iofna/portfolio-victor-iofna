import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Desenvolvimento Web', level: 92, category: 'Frontend' },
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express/NestJS', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Figma', level: 90, category: 'Design' },
  { name: 'Photoshop', level: 85, category: 'Design' },
  { name: 'UI/UX Design', level: 88, category: 'Design' },
  { name: 'Flutter', level: 75, category: 'Mobile' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="min-h-screen bg-primary-dark py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-primary">03.</span> Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Metodologias & Ferramentas</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Scrum', 'Kanban', 'Git', 'GitHub', 'VS Code', 'Postman', 'Docker'].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-6 py-3 bg-[#112240] text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
