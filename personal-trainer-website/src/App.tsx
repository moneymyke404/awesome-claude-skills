import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Corporate from './components/Corporate';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress, FloatingCTA } from './components/FloatingUI';

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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-brand-black">
      <ScrollProgress />
      <FloatingCTA />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Corporate />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
