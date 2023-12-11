import { useEffect } from 'react';
import i18n from '../utils/i18n';

const useLanguageChangeReceptor = () => {
  const handleMessage = (event) => {
    if (event.data && event.data.type === 'LANGUAGE_CHANGE') {
      i18n.changeLanguage(event.data.language);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
};

export default useLanguageChangeReceptor;