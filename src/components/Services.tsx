import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Smartphone, BarChart, Code, Palette } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: `${t("services.landing.title")}`,
      description: `${t("services.landing.description")}`,
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: `${t("services.webapp.title")}`,
      description: `${t("services.webapp.description")}`,
      color: "text-accent",
    },
    {
      icon: Code,
      title: `${t("services.responsive.title")}`,
      description: `${t("services.responsive.description")}`,
      color: "text-primary",
    },
    {
      icon: Palette,
      title: `${t("services.in18.title")}`,
      description: `${t("services.in18.description")}`,
      color: "text-accent",
    },
    {
      icon: BarChart,
      title: `${t("services.performance.title")}`,
      description: `${t("services.performance.description")}`,
      color: "text-primary",
    },
    {
      icon: Zap,
      title: `${t("services.development.title")}`,
      description: `${t("services.development.description")}`,
      color: "text-accent",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            {t("services.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
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
              <p className="font-heading font-semibold text-lg">
                {t("services.act.title")}
              </p>
              <p className="text-muted-foreground">
                {t("services.act.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
