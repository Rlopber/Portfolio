import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./Toogles/ThemeToogle";
import LanguageToggle from "./Toogles/LanguageToogle";
import RadarIcon from "../../assets/icons/RadarIcon";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 py-4 flex flex-row justify-between items-center gap-4 relative">
      <div className="text-xl font-bold tracking-tight">
        Ralowl<span className="text-indigo-400">.dev</span>
      </div>

      <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 sm:ml-6">
          <ThemeToggle />
          <LanguageToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="w-8 h-8 flex items-center justify-center transition sm:hidden z-20"
          >
            <RadarIcon isOpen={menuOpen} />
          </button>
        </div>

        {/* Enlaces desplegables en móvil */}
        {menuOpen && (
          <div
            className="sm:hidden absolute top-full right-6 mt-2 bg-black border border-gray-700 rounded shadow-lg flex flex-col w-40 z-10"
            onClick={() => setMenuOpen(false)}
          >
            <a
              href="#work"
              className="px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
            >
              {t("header.projects")}
            </a>
            <a
              href="#about"
              className="px-4 py-2 hover:bg-gray-800 border-b border-gray-700"
            >
              {t("header.about")}
            </a>
            <a href="#contact" className="px-4 py-2 hover:bg-gray-800">
              {t("header.contact")}
            </a>
          </div>
        )}

        {/* Enlaces en PC */}
        <nav className="hidden sm:flex font-geistmono font-semibold text-sm text-gray-300 uppercase gap-6">
          <a href="#work" className="hover:text-white">
            {t("header.projects")}
          </a>
          <a href="#about" className="hover:text-white">
            {t("header.about")}
          </a>
          <a href="#contact" className="hover:text-white">
            {t("header.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}
