import Image from "next/image";
import Link from "next/link";
import { truncateWords } from "@/utils/truncate-words";
import TuanRumahSoeratin from "../../../public/TuanRumahSoeratin.jpg"
import TrainingField from "../../../public/STOPPER-167.jpg"
import Scholarship from "../../../public/STOPPER-167.jpg"

export default function News() {
  const newsData = [
    {
      id: 1,
      category: "Prestasi",
      title: "Juara Turnamen U-16 Regional",
      desc: "Tim U-16 Blayu FC berhasil meraih juara pertama dalam turnamen regional dengan performa yang luar biasa.",
      date: "15 Januari 2025",
      image: TuanRumahSoeratin,
    },
    {
      id: 2,
      category: "Fasilitas",
      title: "Fasilitas Latihan Baru",
      desc: "Blayu FC meresmikan lapangan latihan baru dengan standar internasional untuk meningkatkan kualitas pelatihan.",
      date: "10 Januari 2025",
      image: TrainingField,
    },
    {
      id: 3,
      category: "Program",
      title: "Program Beasiswa 2025",
      desc: "Dibuka pendaftaran program beasiswa untuk pemain berbakat dari keluarga kurang mampu.",
      date: "5 Januari 2025",
      image: Scholarship,
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center px-6 bg-zinc-50">
      <h2 className="Poppins font-semibold text-2xl mb-2">Berita Terbaru</h2>
      <p className="text-center text-zinc-600 mb-10">
        Ikuti perkembangan dan pencapaian terbaru dari Blayu FC
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-4/5">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-red-50 rounded-xl shadow p-4 flex flex-col border border-zinc-300"
          >
            <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <span className="bg-red-600 w-fit text-white text-xs px-3 py-1 rounded-md mb-2 inline-block">
              {item.category}
            </span>

            <h3 className="font-semibold text-lg text-red-700 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-zinc-700 mb-3">
              {truncateWords(item.desc, 20)}
            </p>

            <span className="text-xs text-zinc-500">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
