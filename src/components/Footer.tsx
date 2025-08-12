import { useTranslation } from "react-i18next";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground flex items-center gap-2">
            © 2022 Natã Martins. Made with
          </p>

          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            {t("footer.tech")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
