import "./languages";

import Header from "./components/Header/Header";
import MarqueeCarousel from "./components/MarqueeCarousel";
import Footer from "./components/Footer";

import { useTranslation } from "react-i18next";
import Projects from "./components/Projects";

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors font-geistmono">
      <Header />
      <main className="flex-grow pt-[150px]">
        <section id="home" className="mb-10">
          <p>Welcome Home</p>
        </section>
        <section
          id="carousel"
          className="mb-20 pt-4 bg-black dark:bg-transparent"
        >
          <MarqueeCarousel direction="left" />
          <MarqueeCarousel direction="right" />
        </section>
        <section id="featured" className="mb-10 scroll-mt-24 px-6 sm:px-10">
          <h2 className="text-5xl font-bold text-black dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">
            {t("projects.featured")}
          </h2>
          <Projects/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
