import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToogle";
import LanguageToggle from "./LanguageToogle";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-700">
      <div className="text-xl font-bold tracking-tight">
        Ralowl<span className="text-indigo-400">.dev</span>
      </div>

      <nav className="flex gap-6 items-center font-semibold text-sm text-gray-300">
        <a href="#work" className="hover:text-white">
          {t("header.projects")}
        </a>
        <a href="#about" className="hover:text-white">
          {t("header.about")}
        </a>
        <a href="#contact" className="hover:text-white">
          {t("header.contact")}
        </a>

        <ThemeToggle />
        <LanguageToggle />

        <a
          href="#contact"
          className="ml-4 border border-gray-400 px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          {t("header.contactBtn")}
        </a>
      </nav>
    </header>
  );
}
