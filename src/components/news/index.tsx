import Image from "next/image";
// import Link from "next/link";
import { truncateWords } from "@/utils/truncate-words";
import TuanRumahSoeratin from "../../../public/STOPPER-167.jpg"
import TrainingField from "../../../public/MessBaru.jpg"
import Scholarship from "../../../public/SlekesiLiga4.jpg"

export default function News() {
  const newsData = [
    {
      id: 1,
      category: "Event",
      title: "Menjadi Tuan Rumah Piala Soeratin U17 2025, Jawa Timur",
      desc: "Untuk pertama kalinya, Blayu FC dipercaya menjadi tuan rumah Piala Soeratin U17 2025, sekaligus menunjukkan perkembangan sepak bola di Malang.",
      date: "20 Juni 2025",
      image: TuanRumahSoeratin,
    },
    {
      id: 2,
      category: "Fasilitas",
      title: "Pembangunan Mess Baru Untuk Siswa Dari Luar Kota",
      desc: "Blayu FC memulai pembangunan mess baru sebagai fasilitas penunjang, demi memberikan tempat tinggal yang nyaman bagi para pemain.",
      date: "1 Juli 2025",
      image: TrainingField,
    },
    {
      id: 3,
      category: "Program",
      title: "Seleksi Liga 4 Untuk Kelahiran 2004 - 2007",
      desc: "Blayu FC membuka program seleksi pemain untuk menghadapi Liga 4 Jawa Timur, memberikan kesempatan bagi talenta muda untuk bergabung.",
      date: "29 Agustus 2025",
      image: Scholarship,
    },
  ];

  return (
    <section id="news" className="w-full py-20 flex flex-col items-center px-6 bg-zinc-50">
      <h2 className="Poppins font-semibold text-2xl mb-2">Latest News</h2>
      <p className="text-center text-zinc-600 mb-10 md:w-3/5 w-full">
        Follow the latest news, achievements, and various activities of Blayu FC, from the field,
        facilities, to player development programs.
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
