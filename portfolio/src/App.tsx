import './languages';
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <main className="flex-grow p-8">
        <section id="home" className="mb-12">
          <h2 className="text-3xl font-bold">Welcome section</h2>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App;