import "./languages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import MarqueeCarousel from "./components/MarqueeCarousel";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors">
      <Header />
      <main className="flex-grow pt-[150px]">
        <section id="home" className="mb-10">
          <p>Welcome Home</p>
        </section>
        <section id="carousel" className="mb-10 bg-black dark:bg-transparent">
          <MarqueeCarousel direction="left" />
          <MarqueeCarousel direction="right" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
