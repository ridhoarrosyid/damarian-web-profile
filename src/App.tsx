import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <Router basename="/damarian-web-profile">
      <ScrollToTop />
      <div className="font-body bg-surface text-on-surface mt-20 scroll-smooth antialiased">
        <Header />

        {/* Konten Rute Halaman */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
