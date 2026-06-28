import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Mengambil informasi URL/path saat ini
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa browser scroll ke koordinat X:0, Y:0 setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  // Komponen ini tidak merender UI apa pun
  return null;
}
