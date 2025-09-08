"use client";

import Image from "next/image";
// import CoachDimas from "../../../public/coach.svg";
import cover from "../../../public/Profilecover.svg"
// import FotoSementara from "../../../public/2.svg";
// import FotoSementara2 from "../../../public/3.svg";
// import FotoSementara3 from "../../../public/4.svg";
// import FotoSementara4 from "../../../public/5.svg";

export default function Staff() {
  const staffData = [
    {
      id: 1,
      name: "Eka Fery Prahyogi",
      role: "CEO Blayu FC",
      image: cover,
    },
    {
      id: 2,
      name: "Dimas Agung P., M.Pd",
      role: "Direktur Utama",
      image: cover,
    },
    {
      id: 3,
      name: "Asep",
      role: "Pelatih Kiper",
      image: cover,
    },
    {
      id: 4,
      name: "Joko",
      role: "Manajer Tim",
      image: cover,
    },
  ];

  return (
    <section className="h-fit w-full flex flex-col items-center justify-center relative min-h-[60vh] py-16 px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
        Staff
      </h2>
      <p className="text-zinc-600 mb-10 text-center">
        Experienced professionals dedicated to the advancement of athletes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="bg-zinc-50 rounded-xl shadow hover:shadow-red-500 transition-all duration-300 p-6 flex flex-col items-center border border-zinc-200"
          >
            <div className="w-28 h-28 relative rounded-full overflow-hidden mb-4">
              <Image
                src={staff.image}
                alt={staff.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-zinc-800">
              {staff.name}
            </h3>
            <p className="text-red-600 text-sm font-medium mb-2">
              {staff.role}
            </p>
            {/* <p className="text-sm text-zinc-600 text-center">{staff.desc}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
