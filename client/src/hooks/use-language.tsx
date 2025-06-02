import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first, then URL hash, then default to 'fr'
    const stored = localStorage.getItem('catalinahome-language') as Language;
    const urlLang = window.location.hash.substring(1) as Language;
    
    if (urlLang && ['fr', 'en'].includes(urlLang)) {
      return urlLang;
    }
    
    if (stored && ['fr', 'en'].includes(stored)) {
      return stored;
    }
    
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('catalinahome-language', lang);
    
    // Update URL without refresh
    const newUrl = `${window.location.origin}${window.location.pathname}#${lang}`;
    window.history.replaceState({}, '', newUrl);
    
    // Update document language
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = language;
    
    // Listen for hash changes
    const handleHashChange = () => {
      const urlLang = window.location.hash.substring(1) as Language;
      if (urlLang && ['fr', 'en'].includes(urlLang) && urlLang !== language) {
        setLanguageState(urlLang);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
