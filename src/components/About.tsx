
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink } from 'lucide-react';

const About = () => {
  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+',
    'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Sass', 'Material UI', 'Git', 'Jest',
    'React Testing Library', 'Cypress', 'REST APIs', 'CI/CD'
  ];

  const differentials = [
    {
      title: 'Entrega Rápida e Ágil',
      description: 'Desenvolvimento eficiente sem comprometer a qualidade'
    },
    {
      title: 'Foco em Soluções Eficazes',
      description: 'Sempre pensando no problema real do usuário'
    },
    {
      title: 'Projetos de Diversas Escalas',
      description: 'De landing pages a aplicações complexas'
    },
    {
      title: 'Qualidade e Responsividade',
      description: 'Código limpo e experiência perfeita em todos os dispositivos'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo and Intro */}
          <div className="animate-fade-in">
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-hero p-1">
                <div className="w-full h-full bg-muted rounded-3xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-4 py-2 rounded-2xl font-semibold animate-float">
                Frontend Pleno
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
                Sobre Mim
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Desenvolvedor Frontend apaixonado por <strong className="text-foreground">tecnologia, UX e código limpo</strong>. 
                Com experiência sólida em React e Next.js, foco em criar soluções que realmente 
                fazem a diferença na vida das pessoas.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                  Minha Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construir soluções digitais que melhoram vidas, combinando 
                  <span className="text-foreground font-medium"> tecnologia, empatia e visão de produto</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gap-2 hero-gradient">
                  <Download className="h-4 w-4" />
                  Baixar Currículo
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Ver LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Skills and Differentials */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                  Tecnologias & Ferramentas
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="justify-center py-2 hover-lift"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Differentials */}
            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                  Meus Diferenciais
                </h3>
                
                <div className="space-y-6">
                  {differentials.map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
