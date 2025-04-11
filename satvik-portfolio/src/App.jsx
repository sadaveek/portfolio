import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [scrollLock, setScrollLock] = useState(true);
  const lenisRef = useRef(null);

  // Initial scroll lock (7 sec)
  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis after scroll unlock
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

  // Force overflow: hidden during scroll lock
  useEffect(() => {
    document.body.style.overflow = scrollLock ? 'hidden' : 'auto';
  }, [scrollLock]);

  return (
    <div className="font-sans">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;