import { useState, useEffect } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hook/useCart";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-surface/95 py-2 shadow-sm backdrop-blur-md" : "bg-surface h-20"}`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-20">
        <Link
          to="#"
          className="font-display text-primary text-2xl font-bold tracking-tight md:text-4xl"
        >
          Damarian
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={
              pathname === "/"
                ? "text-primary border-primary border-b-2 pb-1 font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Beranda
          </Link>
          <Link
            to="/product"
            className={
              pathname === "/product"
                ? "text-primary border-primary border-b-2 pb-1 font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Produk Kami
          </Link>

          <Link
            to="/contact"
            className={
              pathname === "/contact"
                ? "text-primary border-primary border-b-2 pb-1 font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Kontak Kami
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-on-surface-variant hover:text-primary relative p-2 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="bg-primary absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          {/* Tombol Cart Mobile */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-primary relative p-2"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="bg-primary absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-surface border-outline/10 absolute top-full left-0 flex w-full flex-col gap-4 border-t px-6 py-4 shadow-md md:hidden">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === "/"
                ? "text-primary font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Beranda
          </Link>
          <Link
            to="/product"
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === "/product"
                ? "text-primary font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Produk
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={
              pathname === "/contact"
                ? "text-primary font-bold"
                : "text-on-surface-variant font-body hover:text-primary transition-colors"
            }
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
