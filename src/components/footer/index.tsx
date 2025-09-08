"use client";

export default function Footer() {
  const phoneNumber = "6282142117946"; // pakai kode negara 62 untuk Indonesia
  const message = "Halo Admin Blayu FC, saya ingin mendaftar akademi. Mohon informasinya."; 

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-[#5A0B18] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-3">Blayu FC</h3>
          <p className="text-sm text-gray-300 mb-4">
            Klub sepak bola komunitas yang berkomitmen mengembangkan bakat muda 
            dan memberikan fasilitas terbaik bagi pemain.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Kontak Kami</h3>
          <p className="text-sm flex items-center mb-2 text-gray-300">
            📍 Dusun Krajan, Srigading, Kec. Lawang, Kabupaten Malang, Jawa Timur
          </p>
          <p className="text-sm flex items-center mb-2 text-gray-300">
            📞 +62 821-4211-7946
          </p>
          {/* <p className="text-sm flex items-center text-gray-300">
            ✉️ info@blayufc.com
          </p> */}
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Bergabung Sekarang!</h3>
          <p className="text-sm text-gray-300 mb-4">
            Siap menjadi pemain sepak bola profesional? Hubungi kami sekarang 
            untuk informasi pendaftaran.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 hover:bg-green-700 text-center text-white font-medium py-2 rounded-lg"
          >
            Daftar via WhatsApp
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Klik tombol di atas untuk chat langsung dengan admin
          </p>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Blayu FC. All rights reserved.
      </div>
    </footer>
  );
}
