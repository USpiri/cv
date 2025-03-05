import { ui, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export const getNextLanguage = (currentLang: string): string => {
  const keys = Object.keys(languages);
  const currentIndex = keys.indexOf(currentLang);

  if (currentIndex === -1 || currentIndex === keys.length - 1) {
    return keys[0];
  }
  return keys[currentIndex + 1];
};
