import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from "@/i18n/pt-br";
import { en } from "@/i18n/en-us";

const resources = {
  pt,
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
