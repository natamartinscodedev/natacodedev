import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const createMailtoLink = (formData) => {
  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(
    `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
  );
  return `mailto:nata.codedev@gmail.com?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nata.codedev@gmail.com",
      href: "mailto:nata.codedev@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nata-martins",
      href: "https://linkedin.com/in/nata-martins",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/natamartinscodedev",
      href: "https://github.com/natamartinscodedev",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@eusouonatamartinsoficial",
      href: "https://www.instagram.com/eusouonatamartinsoficial/#",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Belo Horizonte, MG",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            {t("contact.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 bg-background shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {t("contact.form.send")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/nata.codedev@gmail.com"
                method="POST"
                onSubmit={() => {
                  toast({
                    title: "Mensagem enviada!",
                    description: "Obrigada! Em breve você receberá um retorno.",
                  });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("contact.form.placeholder.name")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t("contact.form.placeholder.email")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <Select
                    name="subject"
                    onValueChange={(value) =>
                      setFormData({ ...formData, subject: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("contact.form.placeholder.select")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job">
                        {t("contact.subject.job")}
                      </SelectItem>
                      <SelectItem value="project">
                        {t("contact.subject.project")}
                      </SelectItem>
                      <SelectItem value="freelance">
                        {t("contact.subject.frella")}
                      </SelectItem>
                      <SelectItem value="other">
                        {t("contact.subject.other")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 hero-gradient"
                >
                  <Send className="h-5 w-5" />
                  {t("contact.form.send")}
                </Button>

                {/* Campos ocultos configurados corretamente */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://natacodedev.vercel.app/"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Message of Portfolio!"
                />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_captcha" value="false" />
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors duration-200">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {item.label}
                          </p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
