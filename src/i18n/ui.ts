export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.hello": "Home",
  },
  es: {
    "nav.home": "Inicio",
  },
} as const;

export const getNextLanguage = (currentLang: string): string => {
  const keys = Object.keys(languages);
  const currentIndex = keys.indexOf(currentLang);

  if (currentIndex === -1 || currentIndex === keys.length - 1) {
    return keys[0];
  }
  return keys[currentIndex + 1];
};
