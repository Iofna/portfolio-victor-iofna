import { FaHeart, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">Dev</span> Victor Iofna Caba <span className="text-primary">VP</span>
            </h3>
            <p className="text-gray-400">
              Desenvolvedor Full-Stack apaixonado por criar soluções digitais inovadoras e escaláveis.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Iofna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-iofna-caba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://wa.me/5548999397911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/dev_victor_iofna_caba31/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Dev Victor Iofna Caba VP — Todos os direitos reservados. 
            <span className="flex items-center gap-1">
              Feito com <FaHeart className="text-primary" /> e muito código
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
