import {
  Armchair,
  BadgeCheck,
  Bath,
  Car,
  Clock,
  Heart,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Package,
  ShoppingBasket,
  Snowflake,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroimg from "../assets/hero.png";
import aboutimg from "../assets/about.png";
import keripikimg from "../assets/keripik.png";
import kopiimg from "../assets/kopi.png";
import kainimg from "../assets/tapis.png";
import suvenirimg from "../assets/suvenir.png";

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-[600px] items-center overflow-hidden md:h-[870px]">
        <div className="absolute inset-0 z-0">
          <div className="from-primary/80 absolute inset-0 z-10 bg-gradient-to-r to-transparent"></div>
          <img
            src={heroimg}
            alt="Damarian Store Interior"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 text-white md:px-20">
          <h1 className="font-display mb-6 max-w-3xl text-4xl leading-tight font-bold md:text-6xl">
            Autentik, Lengkap, dan Nyaman. Destinasi Utama Oleh-Oleh Khas
            Lampung.
          </h1>
          <p className="font-body mb-10 max-w-2xl text-lg text-white/90">
            Bawa pulang sepotong kehangatan pesona Lampung untuk keluarga
            tersayang. Temukan ratusan pilihan camilan, kopi, dan kerajinan
            tangan terbaik hanya di Damarian.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="#products"
              className="bg-surface text-primary hover:bg-surface-container-high inline-block rounded-lg px-8 py-4 text-center text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              Lihat Katalog Produk
            </Link>
            <Link
              to="#location"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/50 px-8 py-4 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              <Map className="h-5 w-5" />
              Petunjuk Arah ke Toko
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-16 md:px-20 md:py-24"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="bg-primary-fixed text-primary mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase">
              Tentang Kami
            </div>
            <h2 className="font-display text-primary mb-6 text-3xl leading-tight font-semibold md:text-4xl">
              Lebih dari Sekadar Toko, Kami Merawat Tradisi
            </h2>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Berawal dari kecintaan pada kekayaan budaya dan kuliner Sang Bumi
              Ruwa Jurai, Damarian hadir sebagai pusat oleh-oleh terlengkap di
              Bandar Lampung. Kami berkomitmen menyajikan produk-produk UMKM
              pilihan berkualitas tinggi, memastikan setiap buah tangan yang
              Anda bawa memiliki cerita dan cita rasa yang tak terlupakan.
            </p>
            <div className="tapis-divider"></div>
          </div>
          <div className="boutique-shadow relative order-1 aspect-video overflow-hidden rounded-2xl md:order-2">
            <img
              src={aboutimg}
              alt="Tapis weaving"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-7xl px-6 text-center md:px-20">
          <h2 className="font-display text-primary text-3xl font-semibold md:text-4xl">
            Mengapa Memilih Damarian?
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-20 lg:grid-cols-4">
          {[
            {
              icon: BadgeCheck,
              title: "Kualitas & Rasa Terjamin",
              desc: "Produk dikurasi ketat dengan standar kebersihan dan rasa yang konsisten tinggi.",
            },
            {
              icon: ShoppingBasket,
              title: "Paling Lengkap & Hemat",
              desc: "Dari keripik legendaris hingga kain Tapis autentik dengan harga bersaing.",
            },
            {
              icon: Snowflake,
              title: "Belanja Leluasa & Nyaman",
              desc: "Area belanja yang luas, modern, dan ber-AC demi kenyamanan keluarga Anda.",
            },
            {
              icon: Package,
              title: "Gratis Packing Aman",
              desc: "Layanan pengemasan kardus gratis untuk perjalanan udara maupun darat.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface boutique-shadow border-outline/5 rounded-xl border p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary-fixed text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-3 text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-16 md:px-20 md:py-24"
      >
        <h2 className="font-display text-primary mb-12 text-center text-3xl font-semibold md:text-4xl">
          Ragam Pilihan Buah Tangan Lampung
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              tag: "Kudapan",
              title: "Keripik & Camilan",
              img: keripikimg,
            },
            {
              tag: "Minuman",
              title: "Kopi Khas Lampung",
              img: kopiimg,
            },
            {
              tag: "Budaya",
              title: "Kain Tapis & Pakaian",
              img: kainimg,
            },
            {
              tag: "Suvenir",
              title: "Suvenir",
              img: suvenirimg,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group boutique-shadow relative h-[400px] overflow-hidden rounded-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="from-primary/90 via-primary/20 absolute inset-0 bg-gradient-to-t to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="mb-2 block text-xs font-semibold tracking-widest text-white/70 uppercase">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section
        id="best-sellers"
        className="bg-surface-container-low overflow-hidden py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="mb-16 text-center">
            <h2 className="font-display text-primary mb-2 text-3xl font-semibold md:text-4xl">
              Favorit Para Wisatawan
            </h2>
            <p className="text-on-surface-variant text-lg">
              Pilihan wajib yang pantang dilewatkan saat berkunjung ke Lampung.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "ASKHA MELTED COKLAT",
                price: "Rp 28,500",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdpsn3x-suiu9FYDW9gtYhIqzai9FQqO8gU5VED-X5R46ruYGLRZkypCRSDV8zYw6ef9MriZqE-A4-ilZ4nkc0ZGFxRCGaU3XN6Wi6hVnd1_U2r7ov-mBj6nqruYtbFuPq5Ym_KQ33foBvPxPpfEFO5DaYaNyz-xxqFggrJ_avlKRVLIib3jEaDl7K_KcEWePPDf1PoNXQmiWBmItFzqOM4xRhocSrnlZgdC0UIc1YvSR9GpnaJPyMH_uP62-IOPP12308j91hPE",
              },
              {
                title: "49 KOPI PREMIUM",
                price: "Rp 27,500",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE066rMPtkXChFFLs-neMHOzTOwCo56_udgepZKj4EhImjhR266AYK74Gpk68h_wK_0G0bY31CliKOCsUduH95NDkSDTq5-zjls2ojRPuMYD-B7pcEuf8yoPFf2DvMzVBL3bReU7uuZrODSLdOz2iVNspjurAqrJ9SQgYkMXaJN7EOewVSvgYqH2UmbkFSMC13yNJ_JAeLnpJH4stJ2lW2XmaM7j4UJcK9hiIengERQkhXmpwOXGj_uH8SX6tXIyaVrXSygSPZ98",
              },
              {
                title: "ASS ABON AYAM",
                price: "Rp 28,000",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWV4BkUH2_4wn73gdW7b5bpcnXYzxgw6y-cYnMJcDAzoJy59Suy5W-_jCD&s=10",
              },
              {
                title: "ALYSA NAME TAG TAPIS",
                price: "Rp 97,500",
                img: "https://down-id.img.susercontent.com/file/id-11134207-7ra0p-mcpbsydj297bcf",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface boutique-shadow group flex flex-col overflow-hidden rounded-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-display mb-2 flex-1 text-xl font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-primary mb-4 text-lg font-bold">
                    {item.price}
                  </p>
                  <button className="border-primary text-primary hover:bg-primary w-full rounded-lg border py-2 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-white">
                    Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="https://wa.me/6282184565848"
              className="font-display boutique-shadow inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-4 text-xl font-semibold text-white transition-transform hover:scale-105"
            >
              <MessageCircle />
              Pesan Cepat via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="bg-primary-container text-on-primary-container relative flex flex-col items-center gap-12 overflow-hidden rounded-3xl p-8 md:flex-row md:p-16">
            <div className="bg-primary absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full opacity-20"></div>
            <div className="relative z-10 flex-1">
              <h2 className="font-display text-on-primary-container mb-4 text-3xl font-semibold md:text-4xl">
                Penawaran Spesial Bulan Ini!
              </h2>
              <p className="text-on-primary-container/80 mb-8 text-lg">
                Belanja lebih banyak, tentu lebih hemat. Manfaatkan promo khusus
                kami untuk Anda dan rombongan.
              </p>
              <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6">
                <h3 className="font-display mb-2 text-xl font-semibold md:text-3xl">
                  Paket Hemat Keluarga
                </h3>
                <p className="text-lg">
                  Beli 5 Varian Keripik, Gratis 1 Kopi Robusta 100gr!
                </p>
              </div>
              <p className="mb-8 text-sm italic opacity-60">
                *Berlaku untuk pembelian langsung di toko maupun pemesanan
                online.
              </p>
              <Link
                to="https://wa.me/6282184565848"
                className="text-primary rounded-lg bg-white px-10 py-4 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-white/90"
              >
                Klaim Promo Sekarang
              </Link>
            </div>
            <div className="relative z-10 flex w-full justify-center md:w-1/3">
              <div className="relative aspect-square w-full max-w-[350px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqcgWHWE8omrNEA7zyVBStaZfw2wGfuYJiy1QHuF7-l6EAnd97qNHUjbEfX3M4xl4jYQzMlpAMdYSJEm7trxav2Oo-WRqHDgxXFDUAGTPtt-zetARAes2i4XkVakQzijPLZqCogwn5BS5yi0_bVumK1bm-Rem8x49640-LYtMY5Oyr7rwNRjOWPoJx4kYWPX6pE6VnWdJHarT0uqlgHZ9-9Vx8MqWWekMB05NO-8Sh6Lhlss7g-pAx1_tu99GKD61Eu8qVavpPi4"
                  alt="Promo basket"
                  className="h-full w-full rounded-4xl object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-20">
          <h2 className="font-display text-primary mb-4 text-3xl font-semibold md:text-4xl">
            Ramah Rombongan, Belanja Tanpa Pusing
          </h2>
          <p className="text-on-surface-variant mx-auto mb-16 max-w-2xl text-lg">
            Kami siap menyambut kedatangan Anda. Damarian didesain khusus agar
            ramah bagi rombongan keluarga, turis, maupun bus pariwisata.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Car, label: "Area Parkir Luas" },
              { icon: Heart, label: "Musala Bersih & Nyaman" },
              { icon: Bath, label: "Toilet Bersih" },
              { icon: Armchair, label: "Ruang Tunggu Santai" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-surface-container-highest text-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="text-center text-sm font-semibold tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <h2 className="font-display mb-16 text-center text-3xl font-semibold md:text-4xl">
            Kata Mereka yang Sudah Mampir
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                text: '"Tempatnya sangat luas dan bersih, belanja jadi nyaman banget meski bawa anak-anak. Pilihan keripiknya lengkap dan packing kardusnya rapi sekali, sampai di Jakarta dalam kondisi sangat baik!"',
                name: "Sari Wahyuni",
                role: "Wisatawan Jakarta",
              },
              {
                text: '"Sangat direkomendasikan untuk rombongan bus. Parkiran luas, pelayanannya ramah, dan kopinya juara. Paling suka sama kain Tapisnya yang cantik-cantik dengan harga yang masuk akal."',
                name: "Bambang Hermawan",
                role: "Tour Leader",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-primary-container flex flex-col rounded-2xl border border-white/10 p-10"
              >
                <div className="text-tertiary-fixed-dim mb-4 flex">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="-current h-5 w-5" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-lg italic">{item.text}</p>
                <div className="flex items-center gap-4">
                  <div className="bg-surface/20 h-12 w-12 flex-shrink-0 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm opacity-60">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <p className="mb-8 text-center text-sm font-semibold tracking-wide uppercase">
            TELAH DIPERCAYA OLEH BANYAK MITRA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[
              "Travelindo",
              "Lampung Tour",
              "Dinas Pariwisata",
              "Bank Lampung",
            ].map((partner, i) => (
              <span
                key={i}
                className="font-display text-center text-2xl font-semibold"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="relative overflow-hidden py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:px-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-primary mb-8 text-4xl leading-tight font-bold md:text-5xl">
              Belum Mampir ke Damarian, Belum ke Lampung!
            </h2>
            <div className="mb-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Jl. Ryacudu, Sukarame, Kota Bandar Lampung
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Buka Setiap Hari | 07.00 - 22.00 WIB</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="https://www.google.com/maps/place/PUSAT+OLEH+OLEH+LAMPUNG+DAMARIAN/@-5.3684192,105.2994118,15z/data=!4m17!1m10!3m9!1s0x2e40db4da6dfe4e9:0x6bdbbd5741062033!2sPUSAT+OLEH+OLEH+LAMPUNG+DAMARIAN!8m2!3d-5.3684192!4d105.2994118!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11f1nmcwfv!3m5!1s0x2e40db4da6dfe4e9:0x6bdbbd5741062033!8m2!3d-5.3684192!4d105.2994118!16s%2Fg%2F11f1nmcwfv?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                className="bg-primary text-on-primary flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-center text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
              >
                <Navigation className="h-5 w-5" />
                Buka di Google Maps
              </Link>
              <Link
                to="https://wa.me/6282184565848"
                className="border-primary text-primary hover:bg-primary/5 inline-flex items-center justify-center rounded-lg border px-8 py-4 text-center text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                Hubungi Admin Kami
              </Link>
            </div>
          </div>
          <div className="boutique-shadow relative mt-8 aspect-square h-[300px] overflow-hidden rounded-3xl md:mt-0 md:h-[450px]">
            <img
              src="https://mms.img.susercontent.com/sg-11134004-7qvfv-lih37l1v5ci71f"
              alt="Map Location"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </>
  );
}
