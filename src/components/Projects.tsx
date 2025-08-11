
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
      image: '🛒',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe'],
      category: 'Web App',
      status: 'Concluído',
      metrics: '+300% conversão'
    },
    {
      title: 'Landing Page SaaS',
      description: 'Landing page de alta conversão para startup de tecnologia financeira.',
      image: '💰',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      category: 'Landing Page',
      status: 'Concluído',
      metrics: '95% PageSpeed'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.',
      image: '📊',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      category: 'Web App',
      status: 'Em Desenvolvimento',
      metrics: 'Real-time data'
    },
    {
      title: 'App Delivery',
      description: 'Aplicação completa de delivery com sistema de pedidos e tracking em tempo real.',
      image: '🍕',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      category: 'Projeto Escalável',
      status: 'Concluído',
      metrics: '10k+ usuários'
    }
  ];

  const categories = ['Todos', 'Landing Pages', 'Web Apps', 'Projetos Escaláveis'];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Meus Projetos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Todos' ? 'default' : 'outline'}
                className={category === 'Todos' ? 'hero-gradient' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group project-card border-0 bg-background overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-subtle flex items-center justify-center project-image">
                  <div className="text-6xl">{project.image}</div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Github className="h-4 w-4" />
                      Código
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <Badge 
                      variant={project.status === 'Concluído' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium text-accent">
                        {project.metrics}
                      </span>
                    </div>

                    <Button variant="ghost" size="sm" className="gap-2 text-primary">
                      Ver Detalhes
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            Ver Todos os Projetos
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
