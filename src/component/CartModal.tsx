import { useCart } from "../hook/useCart";
// Tambahkan Plus dan Minus dari lucide-react
import { X, Trash2, ShoppingCart, Plus, Minus } from "lucide-react";

export default function CartModal() {
  // Ambil updateQuantity dari hook
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    totalPrice,
    updateQuantity,
  } = useCart();

  const handleCheckout = () => {
    // 1. Format nomor telepon (hilangkan +, spasi, dan strip)
    // +62 821-8456-5848 menjadi 6282184565848
    const phoneNumber = "6282184565848";

    // 2. Buat template pesan kustom
    let message =
      "Halo, saya ingin memesan beberapa produk dari Damarian. Berikut rinciannya:\n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Jumlah: ${item.quantity} x ${item.price}\n`;
    });

    message += `\n*Total Pembayaran: Rp ${totalPrice.toLocaleString("id-ID")}*\n\n`;
    message +=
      "Mohon informasi lebih lanjut mengenai ketersediaan dan pembayarannya. Terima kasih!";

    // 3. Encode pesan agar aman dikirim lewat URL (mengubah spasi dan enter menjadi kode URL)
    const encodedMessage = encodeURIComponent(message);

    // 4. Buat link wa.me dan buka di tab baru
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Modal Content */}
      <div className="bg-surface relative flex max-h-[80vh] w-full max-w-md flex-col overflow-hidden rounded-2xl shadow-2xl">
        <div className="border-outline/10 bg-primary flex items-center justify-between border-b p-6 text-white">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <ShoppingCart size={24} /> Keranjang Belanja
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-1 transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-on-surface-variant italic">
                Keranjang masih kosong...
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-3"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  {/* Bagian Info Produk & Kontrol Kuantitas */}
                  <div className="flex-1">
                    <h3 className="line-clamp-1 text-sm font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-primary mb-2 text-xs font-bold">
                      {item.price}
                    </p>

                    {/* Tombol Plus Minus */}
                    <div className="flex w-fit items-center rounded-lg border border-gray-200 bg-white shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="hover:text-primary rounded-l-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
                      >
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="hover:text-primary rounded-r-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50"
                    title="Hapus barang"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-outline/10 border-t bg-gray-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-medium text-gray-600">Total Estimasi:</span>
              <span className="text-primary text-xl font-bold">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-primary hover:bg-primary/90 shadow-primary/20 w-full rounded-xl py-3 font-bold text-white shadow-lg transition-all active:scale-[0.98]"
            >
              Checkout Sekarang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
