import Image from "next/image";
// import PialaSoeratin from "../../../public/STOPPER-167.jpg"
// import RadarMalang from "../../../public/berita1.webp"
import BlayuFC from "../../../public/logo-blayu.svg"
import Player from "../../../public/PlayerPreview.svg"
import Link from "next/link";
// import Sponsor from "../sponsor";

//ICON
// import { IoIosArrowDown } from "react-icons/io";

export default function HeroSection() {

    return (
        <section id="home" className="min-h-dvh hero-bg pb-10 w-full mb-14 md:mb-0 primary flex relative justify-center items-center overflow-hidden">
            <div className="bg-[#282a37] bg-opacity-80 min-h-dvh w-full absolute top-0"></div>
            <Image src={BlayuFC} alt="Logo Blayu FC" className="absolute top-5 left-5 h-14 w-14 object-cover" />
            <Image src={Player} alt="Player" className="absolute h-[110vh] w-1/4 object-cover -bottom-4 right-10 hidden md:block" />
            <div className="blackwhite-grad h-dvh w-full absolute top-0"></div>

            <div className="h-fit md:w-2/3 w-4/5 relative flex flex-col items-center">
                <p className="h-full text-5xl md:text-6xl Anton text-white font-semibold text-center tracking-wider">Welcome To <span className="text-primary">Blayu FC</span></p>
                <p className="my-3 text-center leading-tight md:w-3/4 w-11/12 md:text-base text-sm Poppins text-zinc-200 font-normal">Bringing our community together through the beautiful game. Join us as we compete with passion, pride, and determination.</p>
                {/* <p className="text-start h-full w-full flex items-center text-9xl Anton text-white font-semibold">FC</p> */}
                <Link href={'#contact'}>
                    <div className="bg-[#282a37] bg-opacity-20 backdrop-blur-md w-fit mt-2 flex border border-white rounded items-center gap-1 text-white text-sm font-semibold px-8 py-2 overflow-hidden hover:bg-[#c8181a] transition-all duration-500 cursor-pointer">Join Our Club</div>
                </Link>
            </div>

        </section>
    );
}
