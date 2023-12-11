import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      species: 'Species',
      gender: 'Gender',
      human: 'Human',
      alien: 'Alien',
      female: 'Female',
      male: 'Male',
    },
  },
  es: {
    translation: {
      species: 'Especie',
      gender: 'Género',
      human: 'Humano',
      alien: 'Alienígena',
      female: 'Femenino',
      male: 'Masculino',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export default i18n;