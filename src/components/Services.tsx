
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Smartphone, BarChart, Code, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Landing Pages de Alta Conversão',
      description: 'Páginas otimizadas para converter visitantes em clientes, com foco em performance e UX.',
      color: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Web Pages Responsivas',
      description: 'Sites que funcionam perfeitamente em todos os dispositivos, do mobile ao desktop.',
      color: 'text-accent'
    },
    {
      icon: Code,
      title: 'Aplicações Web Escaláveis',
      description: 'Sistemas complexos em React, preparados para crescer junto com seu negócio.',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Tradução i18n (PT-BR/EN-US)',
      description: 'Implementação de múltiplos idiomas para alcançar audiências globais.',
      color: 'text-accent'
    },
    {
      icon: BarChart,
      title: 'Otimização de Performance',
      description: 'Melhoria da velocidade e eficiência de aplicações frontend existentes.',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Desenvolvimento Ágil',
      description: 'Entrega rápida sem comprometer a qualidade, usando as melhores práticas.',
      color: 'text-accent'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Serviços Oferecidos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em produtos digitais de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover-lift border-0 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-background rounded-2xl border border-border shadow-lg">
            <div className="text-2xl">🚀</div>
            <div className="text-left">
              <p className="font-heading font-semibold text-lg">Entrega Garantida</p>
              <p className="text-muted-foreground">Projetos entregues no prazo, sempre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
