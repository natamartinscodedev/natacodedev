
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
              Natã Martins
            </h3>
            <p className="text-muted-foreground mb-4">
              Desenvolvedor Frontend Pleno especializado em React e Next.js, 
              criando experiências digitais excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Landing Pages</li>
              <li>Aplicações React</li>
              <li>Sites Responsivos</li>
              <li>Otimização de Performance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground flex items-center gap-2">
            © {currentYear} Natã Martins. Feito com 
            <Heart className="h-4 w-4 text-red-500" /> 
            e 
            <Code className="h-4 w-4 text-primary" />
          </p>
          
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
