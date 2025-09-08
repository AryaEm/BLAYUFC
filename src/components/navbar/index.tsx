// import Image from "next/image"
// import BlayuFC from "../../../public/BlayuFC.webp"
import Link from "next/link"

export default function Nav() {
    return (
        <section className="w-2/5 left-1/2 -translate-x-1/2 h-[8vh] md:flex rounded-full top-5 hidden justify-center fixed z-50 bg-[#282a37] bg-opacity-50 backdrop-blur overflow-hidden shadow-navbar">

            <div className="w-1/2 flex Poppins justify-center items-center gap-6 font-medium text-sm text-white">
                <Link className="hover:scale-110 hover:text-red-500 transition-all" href={'#home'}>Home</Link>
                <Link className="hover:scale-110 hover:text-red-500 transition-all" href={'#about'}>About</Link>
                <Link className="hover:scale-110 hover:text-red-500 transition-all" href={'#news'}>News</Link>
                <Link className="hover:scale-110 hover:text-red-500 transition-all" href={'#staff'}>Staff</Link>
                {/* <Link className="hover:scale-110 hover:text-red-500 transition-all" href={''}>Event</Link> */}
                <Link className="hover:scale-110 hover:text-red-500 transition-all" href={'#contact'}>Contact</Link>
                {/* <Link className="hover:scale-110 hover:text-red-500 transition-all" href={''}>Players</Link> */}
            </div>

        </section>
    )
}