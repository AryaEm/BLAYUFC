"use client";

import Image from "next/image";
import Sponsor1 from "../../../public/BlayuFC.webp"
import Sponsor2 from "../../../public/BlayuFC.webp"
import Sponsor3 from "../../../public/BlayuFC.webp"
import Sponsor4 from "../../../public/BlayuFC.webp"
import Sponsor5 from "../../../public/BlayuFC.webp"

export default function Sponsor() {
  const sponsors = [
    { id: 1, name: "Sponsor A", logo: Sponsor1 },
    { id: 2, name: "Sponsor B", logo: Sponsor2 },
    { id: 3, name: "Sponsor C", logo: Sponsor3 },
    { id: 4, name: "Sponsor D", logo: Sponsor4 },
    { id: 5, name: "Sponsor E", logo: Sponsor5 },
  ];

  return (
    <section className="w-full py-8 flex flex-col items-center bg-white ">

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center w-full max-w-5xl">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}