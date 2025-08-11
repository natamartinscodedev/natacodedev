import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Analytic Web Pro",
      description:
        "Milhões de novas oportunidades - Evite exclusão, multas e reputação em risco — torne sua empresa inclusiva, competitiva e legalmente segura.",
      image: "/img/analitycwebpro.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Vercel",
        "Mongo DB Atlas",
      ],
      category: "Web App",
      status: "Em Desenvolvimento",
      // metrics: "+300% conversão",
      linkweb: "https://www.analytcwebpro.com/",
      show: false,
    },
    {
      title: "Day Life Coffee",
      description:
        "As Melhores Cafeterias de Belo Horizonte Descubra os locais mais aconchegantes para apreciar um café de qualidade.",
      image: "/img/daylifecoffee.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Vercel",
        "Mongo DB Atlas",
      ],
      category: "Web Page",
      status: "Concluído",
      // metrics: "95% PageSpeed",
      linkweb: "https://www.daylifecoffee.com/",
      show: false,
    },
    {
      title: "Afforai",
      description:
        "Afforai é um chatbot de IA que busca, resume e traduz informações de diversas fontes para produzir pesquisas confiáveis. Alimente documentos de pesquisa extensos com pilhas de requisitos de conformidade áridos e extraia as principais descobertas.",
      image: "/img/afforai.png",
      technologies: ["React", "TypeScript", "Sass", "Animations", "Vercel"],
      category: "Landing Page",
      status: "Concluído",
      // metrics: "Real-time data",
      linkweb: "https://afforai-landingpage.vercel.app/",
      linkgithub: "https://github.com/natamartinscodedev/Afforai-landingpage",
      show: true,
    },
    {
      title: "Banco Inter",
      description:
        "Criei este projeto para aprimorar minhas habilidades sociais. Usei NextJS e Sass para estilos e Web Response. Boas práticas, como código limpo, componentes, web responsiva... e para deploy, usei @Vercel.",
      image: "/img/inter.png",
      technologies: ["Next.js", "TypeScript", "Vercel"],
      category: "Projeto Escalável",
      status: "Concluído",
      // metrics: "10k+ usuários",
      linkweb: "https://webinter-gamma.vercel.app/",
      linkgithub: "https://github.com/natamartinscodedev/webinter",
      show: true,
    },
  ];

  const categories = [
    `${t("projects.filter.all")}`,
    // "Landing Pages",
    // "Web Apps",
    // "Projetos Escaláveis",
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            {t("projects.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("projects.subtitle")}
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category ? "default" : "outline"}
                className={category === "Projetos" ? "hero-gradient" : ""}
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
                  <div className="text-6xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 "
                    />
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.linkweb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary" className="gap-2">
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                    </a>
                    {project.show === true ? (
                      <a
                        href={project.linkgithub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Github className="h-4 w-4" />
                          Código
                        </Button>
                      </a>
                    ) : (
                      ""
                    )}
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
                    {/* <Badge
                      variant={
                        project.status === "Concluído" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {project.status}
                    </Badge> */}
                  </div>

                  {/* <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p> */}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium text-accent">
                        {project.metrics}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-primary"
                    >
                      Ver Detalhes
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/natamartinscodedev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2">
              {t("projects.act.title")}
              <ExternalLink className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
