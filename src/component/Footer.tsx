import { Link } from "react-router-dom";
import instagramimg from "../assets/instagram.png";
import tiktokimg from "../assets/tiktok.png";

const links = [
  {
    label: "Beranda",
    path: "/",
  },
  {
    label: "Produk",
    path: "/product",
  },
  {
    label: "Kontak",
    path: "/contact",
  },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-primary dark:bg-primary-container text-primary-fixed w-full py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-10 md:grid-cols-3 md:px-20">
          <div className="md:col-span-1">
            <span className="font-display text-primary-fixed dark:text-primary-fixed mb-4 block text-3xl">
              Damarian
            </span>
            <p className="text-primary-fixed/80 font-body text-md mb-8">
              Pusat Oleh-Oleh Paling Lengkap & Nyaman di Bandar Lampung.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-primary-fixed mb-6 text-sm font-bold tracking-widest uppercase">
              Navigasi
            </h4>
            <ul className="space-y-4">
              {links.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-primary-fixed/80 font-body hover:text-primary-fixed text-base transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-primary-fixed mb-6 text-sm font-bold tracking-widest uppercase">
              Ikuti Kami
            </h4>
            <div className="mb-8 flex gap-4">
              <Link
                to="https://www.instagram.com/damarian_lampung/"
                className="border-primary-fixed/30 bg-primary-fixed/50 hover:bg-primary-fixed hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border text-white transition-all"
              >
                <img src={instagramimg} className="size-6" />
              </Link>
              <Link
                to="https://www.tiktok.com/@damarian_lampung"
                className="border-primary-fixed/30 bg-primary-fixed/50 hover:bg-primary-fixed hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border text-white transition-all"
              >
                <img src={tiktokimg} className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-outline/20 text-primary-fixed/60 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between border-t px-10 pt-8 text-sm md:flex-row md:px-20">
          <p>© 2024 Damarian Lampung. All Rights Reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <span>Made with Heritage Heritage Pride</span>
          </div>
        </div>
      </footer>
    </>
  );
}
