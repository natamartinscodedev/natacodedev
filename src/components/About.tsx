import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript ES6+",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass",
    "Material UI",
    "Git",
    "Jest",
    "React Testing Library",
    "Cypress",
    "REST APIs",
    "CI/CD",
    "Mongo DB Atlas",
  ];

  const differentials = [
    {
      title: `${t("about.softskills.title01")}`,
      description: `${t("about.softskills.description01")}`,
    },
    {
      title: `${t("about.softskills.title02")}`,
      description: `${t("about.softskills.description02")}`,
    },
    {
      title: `${t("about.softskills.title03")}`,
      description: `${t("about.softskills.description03")}`,
    },
    {
      title: `${t("about.softskills.title04")}`,
      description: `${t("about.softskills.description04")}`,
    },
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
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
                {t("about.title")}
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("about.description")}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                  {t("about.mission.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.mission.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/18i2o3E-T-R5-Ge0a-2YwJnLDfG-HH49J/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 hero-gradient">
                    <Download className="h-4 w-4" />
                    {t("about.act.cv")}
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/nata-martins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    {t("about.act.linkedin")}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills and Differentials */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                  {t("about.skills.tools")}
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
                  {t("about.skills")}
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
