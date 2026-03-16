import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Corporate from './components/Corporate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
