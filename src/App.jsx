import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/ProjectsPage';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section id="home" className="min-h-screen flex items-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex items-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
