import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden container_hero"
    >
      <div className="container-custom text-center">
        <div className="animate-slide-up">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            {t("hero.greeting")}
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-gradient">Natã Martins</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
            {t("hero.title")}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
