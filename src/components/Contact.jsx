import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'yofnacaba@gmail.com',
      link: 'mailto:yofnacaba@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: 'WhatsApp Brasil',
      value: '+55 48 99939-7911',
      link: 'https://wa.me/5548999397911',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: 'WhatsApp Internacional',
      value: '+245 955249236',
      link: 'https://wa.me/245955249236',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaGithub className="text-3xl" />,
      title: 'GitHub',
      value: 'github.com/Iofna',
      link: 'https://github.com/Iofna',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: 'LinkedIn',
      value: 'victor-iofna-caba',
      link: 'https://www.linkedin.com/in/victor-iofna-caba/',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      title: 'Instagram Pessoal',
      value: '@dev_victor_iofna_caba31',
      link: 'https://www.instagram.com/dev_victor_iofna_caba31/',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      title: 'Instagram Empresa',
      value: '@partiu_viagem_365_dias',
      link: 'https://www.instagram.com/partiu_viagem_365_dias/',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#112240] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-primary">06.</span> Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. Vamos conversar sobre como posso ajudar no seu próximo projeto!
          </p>

          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Araranguá, SC – Brasil</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-dark p-6 rounded-lg border border-gray-700 hover:border-primary transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-primary transition-colors break-all">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="bg-primary-dark p-8 rounded-lg border border-primary/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Formas Rápidas de Contato</h3>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:yofnacaba@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaEnvelope /> Enviar Email
              </a>
              <a
                href="https://wa.me/5548999397911"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaWhatsapp /> Falar no WhatsApp
              </a>
              <a
                href="https://github.com/Iofna"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaGithub /> Ver GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/victor-iofna-caba/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaLinkedin /> Ver LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
