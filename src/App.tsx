import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='font-body bg-surface text-on-surface mt-20 antialiased scroll-smooth'>
        <Header />

        {/* Konten Rute Halaman */}
        <main className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
