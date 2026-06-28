import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-surface/95 backdrop-blur-md shadow-sm' : 'h-20 bg-surface'}`}
    >
      <div className='flex justify-between items-center px-6 md:px-20 max-w-7xl mx-auto h-full'>
        <Link
          to='#'
          className='font-display text-2xl md:text-4xl text-primary font-bold tracking-tight'
        >
          Damarian
        </Link>
        <div className='hidden md:flex gap-8 items-center'>
          <Link
            to='/'
            className={
              pathname === '/'
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Beranda
          </Link>
          <Link
            to='/product'
            className={
              pathname === '/product'
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Produk Kami
          </Link>

          <Link
            to='/contact'
            className={
              pathname === '/contact'
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Kontak Kami
          </Link>
        </div>
        <button
          className='md:hidden text-primary'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-surface shadow-md py-4 px-6 flex flex-col gap-4 border-t border-outline/10'>
          <Link
            to='/'
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === '/'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Beranda
          </Link>
          <Link
            to='/product'
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === '/product'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Produk
          </Link>
          <Link
            to='/contact'
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === '/contact'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant font-body hover:text-primary transition-colors'
            }
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
