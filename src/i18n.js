import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locale/en.json'
import translationFr from './locale/fr.json'
import translationIt from './locale/it.json'
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEn
  },
  fr: {
    translation: translationFr
  },
  it: {
    translation: translationIt
  }
};
const lan = localStorage.getItem('language')
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: lan ? lan : 'it',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

  export default i18n;