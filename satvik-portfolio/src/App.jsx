import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';

function App() {

  const [scrollLock, setScrollLock] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollLock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollLock]);

  return (
    <>
      <Home />
      <Skills />
      <Projects />
    </>
  );
}

export default App;