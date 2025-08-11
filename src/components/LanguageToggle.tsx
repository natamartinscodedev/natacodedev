import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "pt", name: "PT", flag: "🇧🇷" },
    { code: "en", name: "EN", flag: "🇺🇸" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 p-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 min-w-[80px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="w-full px-3 py-2 text-left hover:bg-muted flex items-center gap-2 text-sm"
            >
              {language.flag} {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
