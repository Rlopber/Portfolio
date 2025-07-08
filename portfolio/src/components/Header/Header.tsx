import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./Toogles/ThemeToogle";
import LanguageToggle from "./Toogles/LanguageToogle";
import RadarIcon from "../../assets/icons/RadarIcon";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-6 flex flex-row justify-between items-center gap-4 border-b border-gray-500 border-opacity-50">
      <div className="font-bold tracking-tight uppercase text-left">
        {/* Móvil y tablet: visible en xs y md, oculta en lg */}
        <div className="flex flex-col lg:hidden text-xs md:text-xl">
          <span>Raquel López Bermúdez</span>
          <span className="text-indigo-400">{t("header.dev")}</span>
        </div>

        {/* Escritorio: visible solo en lg y superior */}
        <div className="hidden lg:flex lg:items-center lg:gap-1 lg:text-lg">
          Raquel López Bermúdez <span className="mx-1">-</span>{" "}
          <span className="text-indigo-400">{t("header.dev")}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 sm:ml-6">
          <ThemeToggle />
          <LanguageToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="w-8 h-8 flex items-center justify-center transition lg:hidden z-20"
          >
            <RadarIcon isOpen={menuOpen} />
          </button>
        </div>

        {/* Menú móvil y tablet: visible hasta 1024px */}
        {menuOpen && (
          <div
            className="absolute top-full right-6 mt-2 bg-black border border-gray-700 rounded shadow-lg flex-col w-40 z-10 hidden max-lg:flex"
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

        {/* Menú escritorio: visible solo desde 1025px */}
        <nav className="hidden laptop:flex font-geistmono font-semibold text-sm text-gray-300 uppercase gap-6">
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
