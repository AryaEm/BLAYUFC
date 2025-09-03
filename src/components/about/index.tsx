import Image from "next/image";
import aboutbg from "../../../public/AboutUsBG.svg";
import aboutbg2 from "../../../public/AboutUsBG2.svg";
import { CiTrophy } from "react-icons/ci";
import { LuUsers, LuMapPin } from "react-icons/lu";
// import { LuMapPin } from "react-icons/lu";

export default function About() {
  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden flex flex-col justify-center items-center px-6">
      <h2 className="Poppins font-semibold text-2xl mb-2">About Blayu FC</h2>

      <p className="w-full md:w-1/2 text-center my-2 Poppins text-sm text-zinc-600">
        Founded with a vision to unite our local community through football,
        Blayu FC has been a cornerstone of grassroots football for years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full md:w-4/5">
        {/* Card 1 */}
        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <CiTrophy className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-zinc-700">
            To develop local talent, promote sportsmanship, and create lasting
            bonds within our community through competitive football.
          </p>
        </div>


        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <LuUsers className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Community First</h3>
          <p className="text-sm text-zinc-700">
            We believe football is more than a game – it&apos;s a way to bring
            people together and build stronger communities.
          </p>
        </div>


        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <LuMapPin className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Local Roots</h3>
          <p className="text-sm text-zinc-700">
            Proudly representing our local area in regional competitions while
            maintaining our grassroots identity.
          </p>
        </div>
      </div>
    </section>
  );
}
