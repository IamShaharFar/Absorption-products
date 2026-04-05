import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import he from './he.json';
import ar from './ar.json';
import ru from './ru.json';
import en from './en.json';

const translations = { he, ar, ru, en };
const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'he';

export const LANGUAGES = [
  { code: 'he', label: 'HE', flag: '🇮🇱', name: 'עברית' },
  { code: 'ar', label: 'AR', flag: '🇸🇦', name: 'العربية' },
  { code: 'ru', label: 'RU', flag: '🇷🇺', name: 'Русский' },
  { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' },
];

export const CATEGORY_KEYS = ['absorbent_underwear', 'absorption_products', 'adult_diapers'];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
  );

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  useEffect(() => {
    const { dir } = translations[lang];
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const parts = key.split('.');
      let val = translations[lang];
      for (const part of parts) {
        val = val?.[part];
      }
      return val ?? key;
    },
    [lang]
  );

  const getProductTranslation = useCallback(
    (productId) => translations[lang].products?.[String(productId)] ?? {},
    [lang]
  );

  const dir = translations[lang].dir;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getProductTranslation, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
