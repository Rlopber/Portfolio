import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLang}
      className="w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full lg:hover:bg-white lg:hover:text-black transition"
    >
      {i18n.language === "en" ? "ES" : "EN"}
    </button>
  );
}
