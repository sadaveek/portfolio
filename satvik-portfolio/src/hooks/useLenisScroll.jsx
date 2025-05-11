import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export default function useLenisScroll({ duration = 1.2, offset = 0} = {}) {

  const [scrollLock, setScrollLock] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollLock) return;
    const lenis = new Lenis({
      duration,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, { offset });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, [duration, offset, scrollLock]);
}