import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Keripik & Camilan Renyah",
    description:
      "Primadona oleh-oleh khas Lampung! Nikmati irisan pisang kepok pilihan dan aneka bahan baku lokal yang digoreng sempurna. Renyah di setiap gigitan, kaya akan taburan bumbu berlapis yang menggugah selera.",
    products: [
      {
        name: "Keripik Pisang Cokelat",
        price: "Rp 25.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdpsn3x-suiu9FYDW9gtYhIqzai9FQqO8gU5VED-X5R46ruYGLRZkypCRSDV8zYw6ef9MriZqE-A4-ilZ4nkc0ZGFxRCGaU3XN6Wi6hVnd1_U2r7ov-mBj6nqruYtbFuPq5Ym_KQ33foBvPxPpfEFO5DaYaNyz-xxqFggrJ_avlKRVLIib3jEaDl7K_KcEWePPDf1PoNXQmiWBmItFzqOM4xRhocSrnlZgdC0UIc1YvSR9GpnaJPyMH_uP62-IOPP12308j91hPE",
      },
      {
        name: "Keripik Pisang Keju",
        price: "Rp 25.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdpsn3x-suiu9FYDW9gtYhIqzai9FQqO8gU5VED-X5R46ruYGLRZkypCRSDV8zYw6ef9MriZqE-A4-ilZ4nkc0ZGFxRCGaU3XN6Wi6hVnd1_U2r7ov-mBj6nqruYtbFuPq5Ym_KQ33foBvPxPpfEFO5DaYaNyz-xxqFggrJ_avlKRVLIib3jEaDl7K_KcEWePPDf1PoNXQmiWBmItFzqOM4xRhocSrnlZgdC0UIc1YvSR9GpnaJPyMH_uP62-IOPP12308j91hPE",
      },
      {
        name: "Keripik Pisang Cokelat",
        price: "Rp 25.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdpsn3x-suiu9FYDW9gtYhIqzai9FQqO8gU5VED-X5R46ruYGLRZkypCRSDV8zYw6ef9MriZqE-A4-ilZ4nkc0ZGFxRCGaU3XN6Wi6hVnd1_U2r7ov-mBj6nqruYtbFuPq5Ym_KQ33foBvPxPpfEFO5DaYaNyz-xxqFggrJ_avlKRVLIib3jEaDl7K_KcEWePPDf1PoNXQmiWBmItFzqOM4xRhocSrnlZgdC0UIc1YvSR9GpnaJPyMH_uP62-IOPP12308j91hPE",
      },
      {
        name: "Keripik Pisang Keju",
        price: "Rp 25.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdpsn3x-suiu9FYDW9gtYhIqzai9FQqO8gU5VED-X5R46ruYGLRZkypCRSDV8zYw6ef9MriZqE-A4-ilZ4nkc0ZGFxRCGaU3XN6Wi6hVnd1_U2r7ov-mBj6nqruYtbFuPq5Ym_KQ33foBvPxPpfEFO5DaYaNyz-xxqFggrJ_avlKRVLIib3jEaDl7K_KcEWePPDf1PoNXQmiWBmItFzqOM4xRhocSrnlZgdC0UIc1YvSR9GpnaJPyMH_uP62-IOPP12308j91hPE",
      },
    ],
  },
  {
    title: "Dodol & Lempok Legit",
    description:
      "Manisnya tradisi yang tak lekang oleh waktu. Terbuat dari buah-buahan segar dan bahan alami berkualitas tanpa pengawet. Tekstur kenyal dan rasa legitnya cocok untuk menemani waktu santai bersama keluarga.",
    products: [
      {
        name: "Lempok Durian Super",
        price: "Rp 65.000",
        img: "https://down-id.img.susercontent.com/file/8604489e0f64c5a5274296f40af44940",
      },
      {
        name: "Dodol Pandan",
        price: "Rp 35.000",
        img: "https://down-id.img.susercontent.com/file/8604489e0f64c5a5274296f40af44940",
      },
      {
        name: "Lempok Durian Super",
        price: "Rp 65.000",
        img: "https://down-id.img.susercontent.com/file/8604489e0f64c5a5274296f40af44940",
      },
      {
        name: "Dodol Pandan",
        price: "Rp 35.000",
        img: "https://down-id.img.susercontent.com/file/8604489e0f64c5a5274296f40af44940",
      },
    ],
  },
  {
    title: "Sale Pisang Manis Alami",
    description:
      "Perpaduan tekstur kenyal dan rasa manis alami dari pisang pilihan yang diproses dengan higienis. Pilihan camilan sehat dan tahan lama yang pas untuk dibawa perjalanan jauh.",
    products: [
      {
        name: "Sale Pisang Ambon",
        price: "Rp 30.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BbxV4u8P1CFfpfjyIb_E_XlijzrqMv35gjBjDgDobT-UkuKi7_0_0OLM&s=10",
      },
      {
        name: "Sale Pisang Gulung",
        price: "Rp 30.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BbxV4u8P1CFfpfjyIb_E_XlijzrqMv35gjBjDgDobT-UkuKi7_0_0OLM&s=10",
      },
      {
        name: "Sale Pisang Ambon",
        price: "Rp 30.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BbxV4u8P1CFfpfjyIb_E_XlijzrqMv35gjBjDgDobT-UkuKi7_0_0OLM&s=10",
      },
      {
        name: "Sale Pisang Gulung",
        price: "Rp 30.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BbxV4u8P1CFfpfjyIb_E_XlijzrqMv35gjBjDgDobT-UkuKi7_0_0OLM&s=10",
      },
    ],
  },
  {
    title: "Kopi Asli Sang Bumi Ruwa Jurai",
    description:
      "Bawa pulang keharuman kopi Robusta terbaik dari dataran tinggi Lampung. Dipanggang dengan tingkat kematangan presisi untuk menghasilkan karakter rasa yang kuat, tebal, dan aroma yang memikat para penikmat kopi sejati.",
    products: [
      {
        name: "Kopi Robusta Premium 250g",
        price: "Rp 45.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE066rMPtkXChFFLs-neMHOzTOwCo56_udgepZKj4EhImjhR266AYK74Gpk68h_wK_0G0bY31CliKOCsUduH95NDkSDTq5-zjls2ojRPuMYD-B7pcEuf8yoPFf2DvMzVBL3bReU7uuZrODSLdOz2iVNspjurAqrJ9SQgYkMXaJN7EOewVSvgYqH2UmbkFSMC13yNJ_JAeLnpJH4stJ2lW2XmaM7j4UJcK9hiIengERQkhXmpwOXGj_uH8SX6tXIyaVrXSygSPZ98",
      },
      {
        name: "Kopi Luwak Liar Kemasan",
        price: "Rp 150.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE066rMPtkXChFFLs-neMHOzTOwCo56_udgepZKj4EhImjhR266AYK74Gpk68h_wK_0G0bY31CliKOCsUduH95NDkSDTq5-zjls2ojRPuMYD-B7pcEuf8yoPFf2DvMzVBL3bReU7uuZrODSLdOz2iVNspjurAqrJ9SQgYkMXaJN7EOewVSvgYqH2UmbkFSMC13yNJ_JAeLnpJH4stJ2lW2XmaM7j4UJcK9hiIengERQkhXmpwOXGj_uH8SX6tXIyaVrXSygSPZ98",
      },
      {
        name: "Kopi Robusta Premium 250g",
        price: "Rp 45.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE066rMPtkXChFFLs-neMHOzTOwCo56_udgepZKj4EhImjhR266AYK74Gpk68h_wK_0G0bY31CliKOCsUduH95NDkSDTq5-zjls2ojRPuMYD-B7pcEuf8yoPFf2DvMzVBL3bReU7uuZrODSLdOz2iVNspjurAqrJ9SQgYkMXaJN7EOewVSvgYqH2UmbkFSMC13yNJ_JAeLnpJH4stJ2lW2XmaM7j4UJcK9hiIengERQkhXmpwOXGj_uH8SX6tXIyaVrXSygSPZ98",
      },
      {
        name: "Kopi Luwak Liar Kemasan",
        price: "Rp 150.000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE066rMPtkXChFFLs-neMHOzTOwCo56_udgepZKj4EhImjhR266AYK74Gpk68h_wK_0G0bY31CliKOCsUduH95NDkSDTq5-zjls2ojRPuMYD-B7pcEuf8yoPFf2DvMzVBL3bReU7uuZrODSLdOz2iVNspjurAqrJ9SQgYkMXaJN7EOewVSvgYqH2UmbkFSMC13yNJ_JAeLnpJH4stJ2lW2XmaM7j4UJcK9hiIengERQkhXmpwOXGj_uH8SX6tXIyaVrXSygSPZ98",
      },
    ],
  },
  {
    title: "Kerajinan Tangan & Kriya",
    description:
      "Sentuhan seni dan kebudayaan Lampung dalam bentuk fisik. Temukan keindahan kain tenun Tapis, kaus bertema lokal, hingga pernak-pernik suvenir cantik hasil mahakarya para pengrajin lokal berbakat.",
    products: [
      {
        name: "Selendang Kain Tapis",
        price: "Rp 250.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDagRiuvXNjsdWv0OTE8ieEYXKyNyUY4VaHAFUUUROfov81xNVh1Ctsi_&s=10",
      },
      {
        name: "Gantungan Kunci Siger",
        price: "Rp 15.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDagRiuvXNjsdWv0OTE8ieEYXKyNyUY4VaHAFUUUROfov81xNVh1Ctsi_&s=10",
      },
      {
        name: "Selendang Kain Tapis",
        price: "Rp 250.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDagRiuvXNjsdWv0OTE8ieEYXKyNyUY4VaHAFUUUROfov81xNVh1Ctsi_&s=10",
      },
      {
        name: "Gantungan Kunci Siger",
        price: "Rp 15.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDagRiuvXNjsdWv0OTE8ieEYXKyNyUY4VaHAFUUUROfov81xNVh1Ctsi_&s=10",
      },
    ],
  },
  {
    title: "Sambal Kemasan Penggugah Selera",
    description:
      "Tambahkan sensasi pedas gurih khas Sumatera ke meja makan Anda. Diraci dari cabai segar dan bumbu pilihan, dikemas rapat agar rasa dan aromanya tetap terjaga sempurna sampai di rumah.",
    products: [
      {
        name: "Sambal Lingkung Ikan",
        price: "Rp 40.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEcbu8oAy1iw2mg_Wm1__yyIKpw_o9UdiYok6-lpQx-SgIGZV4JKchBM&s=10",
      },
      {
        name: "Sambal Bawang Ekstra Pedas",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEcbu8oAy1iw2mg_Wm1__yyIKpw_o9UdiYok6-lpQx-SgIGZV4JKchBM&s=10",
      },
      {
        name: "Sambal Lingkung Ikan",
        price: "Rp 40.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEcbu8oAy1iw2mg_Wm1__yyIKpw_o9UdiYok6-lpQx-SgIGZV4JKchBM&s=10",
      },
      {
        name: "Sambal Bawang Ekstra Pedas",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEcbu8oAy1iw2mg_Wm1__yyIKpw_o9UdiYok6-lpQx-SgIGZV4JKchBM&s=10",
      },
    ],
  },
  {
    title: "Kerupuk & Kemplang Gurih",
    description:
      "Pendamping wajib untuk setiap hidangan. Dibuat dari olahan ikan segar pilihan yang memberikan rasa gurih maksimal, dipanggang atau digoreng hingga mekar merata. Jangan lupa padukan dengan cocolan sambal terasinya!",
    products: [
      {
        name: "Kemplang Panggang Khas",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyIEfnTEwOnQJms8gLICRC3_Rhubo1GPqCLsc_UYAYwNcwEPJ4udqEiIM&s=10",
      },
      {
        name: "Kerupuk Ikan Tenggiri",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyIEfnTEwOnQJms8gLICRC3_Rhubo1GPqCLsc_UYAYwNcwEPJ4udqEiIM&s=10",
      },
      {
        name: "Kemplang Panggang Khas",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyIEfnTEwOnQJms8gLICRC3_Rhubo1GPqCLsc_UYAYwNcwEPJ4udqEiIM&s=10",
      },
      {
        name: "Kerupuk Ikan Tenggiri",
        price: "Rp 35.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyIEfnTEwOnQJms8gLICRC3_Rhubo1GPqCLsc_UYAYwNcwEPJ4udqEiIM&s=10",
      },
    ],
  },
];

export default function Product() {
  return (
    <>
      {/* Hero Catalog */}
      <section className="bg-surface-container flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
        <span className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase">
          Katalog Lengkap
        </span>
        <h1 className="font-display text-primary mb-6 text-4xl font-bold md:text-5xl">
          Katalog Buah Tangan Damarian
        </h1>
        <p className="text-on-surface-variant mx-auto max-w-2xl text-base md:text-lg">
          Dari renyahnya camilan hingga mahakarya kriya lokal. Temukan dan pilih
          langsung oleh-oleh khas Lampung favorit Anda dan keluarga di sini.
        </p>
      </section>

      {/* Catalog List */}
      <section className="bg-primary-container">
        <div className="mx-auto max-w-7xl space-y-24 px-6 py-16 md:px-20">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-300 bg-white p-4 py-8 shadow lg:p-20 lg:py-20"
            >
              <h2 className="font-display text-primary mb-4 text-3xl font-bold">
                {cat.title}
              </h2>
              <p className="text-on-surface-variant mb-8 max-w-3xl text-sm leading-relaxed md:text-lg">
                {cat.description}
              </p>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {cat.products.map((product, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-surface outline-primary/50 boutique-shadow group flex flex-col overflow-hidden rounded-xl outline"
                  >
                    <div className="bg-surface-container-highest relative h-40 overflow-hidden p-2 md:h-64 md:p-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full rounded-lg object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-surface flex flex-1 flex-col p-3 pb-4 md:p-6">
                      <h4 className="font-display mb-1 flex-1 text-base font-semibold md:text-xl lg:mb-2">
                        {product.name}
                      </h4>
                      <p className="text-primary text-sm font-bold lg:text-lg">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-on-primary px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-primary-fixed mb-6 text-3xl font-bold md:text-4xl">
            Bingung Mau Pilih yang Mana?
          </h2>
          <p className="text-primary-fixed/80 mb-10 text-sm leading-relaxed md:text-lg">
            Admin kami siap membantu Anda menyusun paket oleh-oleh terbaik
            sesuai kebutuhan dan budget Anda. Dapatkan juga layanan gratis
            pengemasan kardus untuk pembelian Anda!
          </p>
          <Link
            to="https://wa.me/6282184565848"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e9e4bb] px-10 py-4 font-semibold tracking-wide text-[#1e1c04] shadow-lg transition-colors hover:bg-[#ccc8a1]"
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi & Pesan via WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
