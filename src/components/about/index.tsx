// import Image from "next/image";
// import aboutbg from "../../../public/AboutUsBG.svg";
// import aboutbg2 from "../../../public/AboutUsBG2.svg";
import { CiTrophy } from "react-icons/ci";
import { LuUsers, LuMapPin } from "react-icons/lu";
// import { LuMapPin } from "react-icons/lu";

export default function About() {
  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden flex flex-col justify-center items-center px-6">
      <h2 className="Poppins font-semibold text-2xl mb-2">About Blayu FC</h2>

      <p className="w-full md:w-3/5 text-center my-2 Poppins text-sm text-zinc-600">
        We were born out of a spirit of togetherness. More than just a soccer club,
        we exist to develop local talent, strengthen community ties,
        and preserve the cultural roots of soccer in our homeland.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full md:w-4/5">
        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <CiTrophy className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-zinc-700 text-justify">
            We are committed to honing young talent, instilling sportsmanship,
            and developing players with character through healthy competition.
          </p>
        </div>


        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <LuUsers className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Community First</h3>
          <p className="text-sm text-zinc-700  text-justify">
            For us, soccer is not just a game. It is a means to bring people together,
            foster solidarity, and strengthen a sense of belonging within the community.
          </p>
        </div>


        <div className="bg-[#FAE2DF] rounded-xl shadow p-6 pb-10 flex flex-col items-start">
          <LuMapPin className="text-[#D40924] w-8 h-8 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-sm text-zinc-700  text-justify">
            Located in Lawang, Malang Regency, Blayu FC has grown as a 
            representation of the region with youthful enthusiasm.
          </p>
        </div>
      </div>
    </section>
  );
}
