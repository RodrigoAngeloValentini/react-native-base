import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLanguageByDevice} from './functions';

import pt from './pt/pt';

const locales = {
  pt,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const lang = getLanguageByDevice();
    callback(lang);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'pt',
  debug: false,
  resources: locales,
});

export default i18next;
