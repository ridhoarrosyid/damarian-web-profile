import {
  MapPin,
  MessageSquare,
  Share2,
  Handshake,
  Navigation,
  Send,
  Mail,
  Diamond,
} from "lucide-react";
import { Link } from "react-router-dom";
import instagramimg from "../assets/instagram.png";
import tiktokimg from "../assets/tiktok.png";

export default function ContactPage() {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            data-aos="fade-up"
            className="font-display text-primary mb-6 text-4xl font-bold md:text-5xl"
          >
            Mari Terhubung dengan Damarian
          </h1>
          <p
            data-aos="fade-up"
            className="text-on-surface-variant mx-auto max-w-2xl text-lg leading-relaxed"
          >
            Punya pertanyaan, ingin memesan untuk rombongan, atau sekadar
            menanyakan ketersediaan produk? Pilih jalur komunikasi yang paling
            nyaman untuk Anda di bawah ini.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Kunjungi Toko Kami */}
            <div
              data-aos="fade-up"
              className="outline-primary/10 bg-surface-container-lowest boutique-shadow relative flex min-h-[480px] flex-col overflow-hidden rounded-3xl outline"
            >
              <div className="relative z-10 flex-1 p-8 md:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <MapPin className="text-primary h-8 w-8" strokeWidth={1.5} />
                  <h2 className="font-display text-primary text-3xl font-bold">
                    Kunjungi Toko Kami
                  </h2>
                </div>
                <p className="text-on-surface-variant mb-8 max-w-md text-lg leading-relaxed">
                  Pusat oleh-oleh terlengkap dengan parkir luas dan fasilitas
                  nyaman. Buka setiap hari, siap menyambut perjalanan Anda.
                </p>
                <div className="bg-surface border-outline/10 mb-10 rounded-2xl border p-6 shadow-sm">
                  <p className="text-on-surface-variant mb-2 text-xs font-semibold tracking-widest uppercase">
                    Alamat Utama
                  </p>
                  <p className="text-primary text-lg font-medium">
                    Jl. Ryacudu, Sukarame, Kota Bandar Lampung
                  </p>
                </div>
                <Link
                  to="https://www.google.com/maps/place/PUSAT+OLEH+OLEH+LAMPUNG+DAMARIAN/@-5.3684192,105.2994118,17z/data=!3m1!4b1!4m6!3m5!1s0x2e40db4da6dfe4e9:0x6bdbbd5741062033!8m2!3d-5.3684192!4d105.2994118!16s%2Fg%2F11f1nmcwfv?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                  className="bg-primary text-on-primary hover:bg-primary/90 flex w-fit items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold shadow-md transition-colors"
                >
                  Panduan Arah (Google Maps)
                  <Navigation className="h-5 w-5" />
                </Link>
              </div>
              <div className="relative mt-auto h-48 w-full sm:h-64">
                {/* Simulated Map Image */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.317719725043!2d105.29941180000002!3d-5.3684192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db4da6dfe4e9%3A0x6bdbbd5741062033!2sPUSAT%20OLEH%20OLEH%20LAMPUNG%20DAMARIAN!5e0!3m2!1sid!2sid!4v1782656040922!5m2!1sid!2sid"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* Ikuti Keseruan Kami */}
            <div
              data-aos="fade-right"
              className="boutique-shadow relative grid items-center gap-8 overflow-hidden rounded-3xl bg-[#e9e4bb] p-8 md:grid-cols-2 md:p-12"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <Share2
                    className="h-7 w-7 text-[#4a482a]"
                    strokeWidth={1.5}
                  />
                  <h2 className="font-display text-2xl font-bold text-[#4a482a]">
                    Ikuti Keseruan Kami
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-[#686645]">
                  Jangan lewatkan update produk terbaru, promo suvenir, dan
                  cerita menarik dari pengrajin Damarian.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <Link
                  to="https://www.instagram.com/damarian_lampung/"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#f2efe0] px-4 py-3 text-sm font-medium text-[#4a482a] transition-colors hover:bg-white"
                >
                  <img className="h-5 w-5" src={instagramimg} />{" "}
                  @damarian_lampung
                </Link>
                <Link
                  to="https://www.tiktok.com/@damarian_lampung"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#f2efe0] px-4 py-3 text-sm font-medium text-[#4a482a] transition-colors hover:bg-white"
                >
                  <img className="h-5 w-5" src={tiktokimg} /> @damarian_lampung
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            data-aos="fade-left"
            className="flex flex-col gap-6 lg:col-span-1"
          >
            {/* Pesan & Tanya Cepat */}
            <div className="bg-primary text-primary-fixed boutique-shadow relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-bl-[100px] bg-white/5" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <MessageSquare
                    className="text-primary-fixed h-8 w-8"
                    strokeWidth={1.5}
                  />
                  <h2 className="font-display text-primary-fixed text-3xl font-bold">
                    Pesan & Tanya Cepat
                  </h2>
                </div>
                <p className="text-primary-fixed mb-10 text-base leading-relaxed">
                  Admin kami siap merespons pesanan dan memberikan solusi
                  packing terbaik untuk Anda. Konsultasi oleh-oleh khas Lampung
                  kini lebih mudah.
                </p>
                <div className="mt-auto">
                  <p className="font-display text-primary-fixed mb-6 text-4xl font-bold tracking-wide md:text-3xl xl:text-3xl">
                    0812-3456-7890
                  </p>
                  <Link
                    to="https://wa.me/6282184565848"
                    className="bg-surface text-primary hover:bg-surface-variant flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold shadow-md transition-colors"
                  >
                    Chat WhatsApp Sekarang
                    <Send className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Kemitraan & B2B */}
            <div
              data-aos="fade-up"
              className="bg-surface-container-low boutique-shadow outline-primary/10 flex flex-col rounded-3xl p-8 outline-1 md:p-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <Handshake className="text-primary h-7 w-7" strokeWidth={1.5} />
                <h2 className="font-display text-primary text-2xl font-bold">
                  Kemitraan & B2B
                </h2>
              </div>

              <div className="bg-surface border-outline/10 flex h-full flex-col rounded-2xl border p-6 shadow-sm">
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  Untuk kebutuhan pesanan korporat, kerja sama biro perjalanan
                  pariwisata, atau supplier produk lokal Lampung.
                </p>
                <div className="space-y-4">
                  <div className="bg-surface-container-low border-outline/10 flex items-center gap-3 rounded-xl border px-4 py-3">
                    <Mail className="text-primary h-5 w-5" />
                    <span className="text-primary text-sm font-medium break-all">
                      halo@damarian.com
                    </span>
                  </div>
                  <button className="bg-primary text-on-primary hover:bg-primary/90 w-full rounded-xl py-3 text-sm font-semibold shadow-sm transition-colors">
                    Kirim Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-outline/20 mt-20 flex justify-center gap-6">
          <Diamond className="h-6 w-6 animate-pulse" />
          <Diamond className="h-6 w-6 animate-pulse delay-75" />
          <Diamond className="h-6 w-6 animate-pulse delay-150" />
        </div>
      </div>
    </>
  );
}
