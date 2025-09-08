"use client";

import Image from "next/image";
import Pocari from "../../../public/pocari.svg"
import Fuelin from "../../../public/fuelin.svg"
import Moklet from "../../../public/moklet.svg"
import Most from "../../../public/most.svg"
import Efp from "../../../public/efp.svg"
import Agro from "../../../public/agro.svg"

export default function Sponsor() {
  const sponsors = [
    { id: 1, name: "Pocari", logo: Pocari },
    { id: 2, name: "Fuelin", logo: Fuelin },
    { id: 3, name: "SMK Telkom Malang", logo: Moklet },
    { id: 4, name: "Moklet Sport Technology", logo: Most },
    { id: 5, name: "PT. Eka Family Perkasa", logo: Efp },
    { id: 6, name: "Agro", logo: Agro },
  ];

  return (
    <section className="w-full py-8 flex flex-col items-center bg-white">

      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center w-full max-w-6xl">
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