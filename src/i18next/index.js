import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { eng } from "./en";
import { esp } from "./es";

i18n.use(initReactI18next).init({
  lng: sessionStorage.getItem("switch") === "false" ? "es" : "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: eng,
    },
    es: {
      translation: esp,
    },
  },
});

export default i18n;
