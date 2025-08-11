
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom text-center">
        <div className="animate-slide-up">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            Olá, eu sou
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-gradient">Natã Martins</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
            Desenvolvedor Frontend Pleno
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transformando <span className="text-primary font-semibold">ideias em experiências digitais</span> excepcionais. 
            Apaixonado por criar aplicações escaláveis, acessíveis e de alto desempenho.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gap-2 hero-gradient text-lg px-8 py-6 hover-lift"
            >
              Ver Meus Projetos
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-lg px-6 py-6 hover-lift"
              >
                <Download className="h-5 w-5" />
                Currículo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-lg px-6 py-6 hover-lift accent-gradient"
              >
                <ExternalLink className="h-5 w-5" />
                Orçamento
              </Button>
            </div>
          </div>

          {/* Status */}
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium">Disponível para novos projetos</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
