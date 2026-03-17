import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

type Page = 'home' | 'collection' | 'product' | 'checkout' | 'confirmation'
  | 'philosophy' | 'journal' | 'circle' | 'contact';

// Minimal stub pages for nav links not fully built
function StubPage({ title, onNavigate }: { title: string; onNavigate: (p: string) => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="section-eyebrow mb-4">Coming Soon</p>
      <h1 className="font-display text-4xl font-bold text-jt-text uppercase tracking-wide mb-4">{title}</h1>
      <p className="font-serif italic text-jt-muted mb-8 max-w-sm">
        This page is being crafted with the same intention as every Jamaican Toni piece.
      </p>
      <button onClick={() => onNavigate('home')} className="btn-dark">Back to Home</button>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [productId, setProductId] = useState<string>('');
  const [cartCount, setCartCount] = useState(0);
  const [cartProductId, setCartProductId] = useState<string>('');

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);

  const navigate = (p: string, id?: string) => {
    setPage(p as Page);
    if (id) { setProductId(id); setCartProductId(id); }
  };

  const addToCart = () => setCartCount(c => c + 1);

  const showNavbar = !['checkout', 'confirmation'].includes(page);

  return (
    <div className="min-h-screen bg-jt-cream">
      {showNavbar && (
        <Navbar cartCount={cartCount} onNavigate={navigate} currentPage={page} />
      )}

      {page === 'home'         && <HomePage onNavigate={navigate} />}
      {page === 'collection'   && <CollectionPage onNavigate={navigate} />}
      {page === 'product'      && <ProductPage productId={productId} onNavigate={navigate} onAddToCart={addToCart} />}
      {page === 'checkout'     && <CheckoutPage onNavigate={navigate} cartProduct={cartProductId} />}
      {page === 'confirmation' && <ConfirmationPage onNavigate={navigate} />}
      {page === 'philosophy'   && <StubPage title="Our Philosophy" onNavigate={navigate} />}
      {page === 'journal'      && <StubPage title="The Journal" onNavigate={navigate} />}
      {page === 'circle'       && <StubPage title="The Alignment Circle" onNavigate={navigate} />}
      {page === 'contact'      && <StubPage title="Contact" onNavigate={navigate} />}
    </div>
  );
}
