import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ScrollToTop from "./component/ScrollToTop";
import { CartProvider } from "./contexts/cardContext";
import CartModal from "./component/CartModal";
import { useEffect } from "react";
import Aos from "aos";

function AppContent() {
  const location = useLocation(); // Ini aman karena AppContent akan dibungkus BrowserRouter

  useEffect(() => {
    Aos.init({ duration: 800, offset: 100 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location.pathname]);
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="font-body bg-surface text-on-surface mt-20 scroll-smooth antialiased">
        <Header />
        <CartModal />
        {/* Konten Rute Halaman */}
        <main className="grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

function App() {
  return (
    <Router basename="/damarian-web-profile">
      <AppContent />
    </Router>
  );
}

export default App;
