import {
  MapPin,
  MessageSquare,
  Share2,
  Handshake,
  Navigation,
  Send,
  Mail,
  Diamond,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <>
      <div className='max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='font-display text-4xl md:text-5xl font-bold text-primary mb-6'>
            Mari Terhubung dengan Damarian
          </h1>
          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed'>
            Punya pertanyaan, ingin memesan untuk rombongan, atau sekadar
            menanyakan ketersediaan produk? Pilih jalur komunikasi yang paling
            nyaman untuk Anda di bawah ini.
          </p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
          {/* Left Column */}
          <div className='lg:col-span-2 flex flex-col gap-6'>
            {/* Kunjungi Toko Kami */}
            <div className='outline outline-primary/10 bg-surface-container-lowest rounded-3xl overflow-hidden boutique-shadow flex flex-col relative min-h-[480px]'>
              <div className='p-8 md:p-12 z-10 relative flex-1'>
                <div className='flex items-center gap-4 mb-6'>
                  <MapPin className='w-8 h-8 text-primary' strokeWidth={1.5} />
                  <h2 className='font-display text-3xl font-bold text-primary'>
                    Kunjungi Toko Kami
                  </h2>
                </div>
                <p className='text-on-surface-variant text-lg mb-8 max-w-md leading-relaxed'>
                  Pusat oleh-oleh terlengkap dengan parkir luas dan fasilitas
                  nyaman. Buka setiap hari, siap menyambut perjalanan Anda.
                </p>
                <div className='bg-surface rounded-2xl p-6 mb-10 border border-outline/10 shadow-sm'>
                  <p className='text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2'>
                    Alamat Utama
                  </p>
                  <p className='text-lg font-medium text-primary'>
                    Jl. Ryacudu, Sukarame, Kota Bandar Lampung
                  </p>
                </div>
                <Link
                  to='https://www.google.com/maps/place/PUSAT+OLEH+OLEH+LAMPUNG+DAMARIAN/@-5.3684192,105.2994118,17z/data=!3m1!4b1!4m6!3m5!1s0x2e40db4da6dfe4e9:0x6bdbbd5741062033!8m2!3d-5.3684192!4d105.2994118!16s%2Fg%2F11f1nmcwfv?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D'
                  className='bg-primary text-on-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors w-fit shadow-md text-sm'
                >
                  Panduan Arah (Google Maps)
                  <Navigation className='w-5 h-5' />
                </Link>
              </div>
              <div className='relative w-full h-48 sm:h-64 mt-auto'>
                {/* Simulated Map Image */}
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.317719725043!2d105.29941180000002!3d-5.3684192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db4da6dfe4e9%3A0x6bdbbd5741062033!2sPUSAT%20OLEH%20OLEH%20LAMPUNG%20DAMARIAN!5e0!3m2!1sid!2sid!4v1782656040922!5m2!1sid!2sid'
                  className='border-0 w-full h-full'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='strict-origin-when-cross-origin'
                ></iframe>
              </div>
            </div>

            {/* Ikuti Keseruan Kami */}
            <div className='bg-[#e9e4bb] rounded-3xl p-8 md:p-12 boutique-shadow grid md:grid-cols-2 gap-8 items-center relative overflow-hidden'>
              <div className='z-10 relative'>
                <div className='flex items-center gap-3 mb-4'>
                  <Share2
                    className='w-7 h-7 text-[#4a482a]'
                    strokeWidth={1.5}
                  />
                  <h2 className='font-display text-2xl font-bold text-[#4a482a]'>
                    Ikuti Keseruan Kami
                  </h2>
                </div>
                <p className='text-[#686645] text-lg leading-relaxed'>
                  Jangan lewatkan update produk terbaru, promo suvenir, dan
                  cerita menarik dari pengrajin Damarian.
                </p>
              </div>
              <div className='flex flex-col gap-4 z-10 relative'>
                <Link
                  to='https://www.instagram.com/damarian_lampung/'
                  className='bg-[#f2efe0] px-4 py-3 rounded-xl flex items-center justify-center gap-2 flex-1 text-[#4a482a] font-medium text-sm hover:bg-white transition-colors'
                >
                  <img className='w-5 h-5' src='src/assets/Instagram.png' />{' '}
                  @damarian_lampung
                </Link>
                <Link
                  to='https://www.tiktok.com/@damarian_lampung'
                  className='bg-[#f2efe0] px-4 py-3 rounded-xl flex items-center justify-center gap-2 flex-1 text-[#4a482a] font-medium text-sm hover:bg-white transition-colors'
                >
                  <img className='w-5 h-5' src='src/assets/tiktok.png' />{' '}
                  @damarian_lampung
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='lg:col-span-1 flex flex-col gap-6'>
            {/* Pesan & Tanya Cepat */}
            <div className='bg-primary text-primary-fixed rounded-3xl p-8 md:p-10 boutique-shadow flex flex-col h-full min-h-[480px] relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[100px] pointer-events-none' />
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none' />

              <div className='z-10 relative flex flex-col h-full'>
                <div className='flex items-center gap-3 mb-6'>
                  <MessageSquare
                    className='w-8 h-8 text-primary-fixed'
                    strokeWidth={1.5}
                  />
                  <h2 className='font-display text-3xl font-bold text-primary-fixed'>
                    Pesan & Tanya Cepat
                  </h2>
                </div>
                <p className='text-primary-fixed text-base leading-relaxed mb-10'>
                  Admin kami siap merespons pesanan dan memberikan solusi
                  packing terbaik untuk Anda. Konsultasi oleh-oleh khas Lampung
                  kini lebih mudah.
                </p>
                <div className='mt-auto'>
                  <p className='font-display text-4xl md:text-3xl xl:text-3xl font-bold text-primary-fixed mb-6 tracking-wide'>
                    0812-3456-7890
                  </p>
                  <Link
                    to='https://wa.me/6282184565848'
                    className='bg-surface text-primary w-full py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-surface-variant transition-colors shadow-md text-sm'
                  >
                    Chat WhatsApp Sekarang
                    <Send className='w-5 h-5' />
                  </Link>
                </div>
              </div>
            </div>

            {/* Kemitraan & B2B */}
            <div className='bg-surface-container-low rounded-3xl p-8 md:p-10 boutique-shadow flex flex-col outline-1 outline-primary/10 '>
              <div className='flex items-center gap-3 mb-6'>
                <Handshake className='w-7 h-7 text-primary' strokeWidth={1.5} />
                <h2 className='font-display text-2xl font-bold text-primary'>
                  Kemitraan & B2B
                </h2>
              </div>

              <div className='bg-surface rounded-2xl p-6 border border-outline/10 shadow-sm flex flex-col h-full'>
                <p className='text-on-surface-variant text-sm leading-relaxed mb-6'>
                  Untuk kebutuhan pesanan korporat, kerja sama biro perjalanan
                  pariwisata, atau supplier produk lokal Lampung.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl border border-outline/10'>
                    <Mail className='w-5 h-5 text-primary' />
                    <span className='text-sm font-medium text-primary break-all'>
                      halo@damarian.com
                    </span>
                  </div>
                  <button className='bg-primary text-on-primary w-full py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm shadow-sm'>
                    Kirim Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='flex justify-center gap-6 mt-20 text-outline/20'>
          <Diamond className='w-6 h-6 animate-pulse' />
          <Diamond className='w-6 h-6 animate-pulse delay-75' />
          <Diamond className='w-6 h-6 animate-pulse delay-150' />
        </div>
      </div>
    </>
  );
}
