import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { applyTheme } from './themes';
import config from './config.json';
import './App.css';

function App() {
  useEffect(() => {
    // Apply theme on mount
    applyTheme(config.theme || 'purple');
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
