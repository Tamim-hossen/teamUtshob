import { create } from "zustand";


const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedLanguage") || "Bangla";
  }
  return "Bangla";
};

export const useLanguageStore = create((set, get) => ({
  selectedLanguage: getInitialLanguage(),
  setLang: (lang) => {
    set({ selectedLanguage: lang });
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang);
    }
  },
}));
