import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [scrollLock, setScrollLock] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollLock) return;

    const lenis = new Lenis();

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [scrollLock]);

  useEffect(() => {
    document.body.style.overflow = scrollLock ? 'hidden' : 'auto';
  }, [scrollLock]);

  return (
    <div className="font-sans">
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;