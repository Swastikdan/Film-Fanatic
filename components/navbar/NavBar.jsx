import Link from "next/link"
import Image from "next/image"
import ModeToggle from "../ModeToggle"
import MobileDropdown from "./MobileDropdown"
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Now Showing",
    path: "/now-showing",
  },
  {
    title: "Explore by Genre",
    path: "/explore-genres",
  },
  {
    title: "Upcoming Releases",
    path: "/upcoming",
  },
]

export default function NavBar() {
  return (
   <nav className=" bg-gray-50 dark:bg-gray-900 ">
   <header className="flex items-center justify-between mx-auto max-w-screen-xl px-5 md:px-10 py-5">
   <Link  href="/" className="flex space-x-2 items-center "  >
   <Image src="/logo.png" alt="logo" width={50} height={50} className="w-10 h-10" />
   <span className="text-xl  lg:text-2xl  xl:text-3xl font-semibold">Film Fanatic</span>
   
   </Link>
   <div className="flex items-center space-x-5">
   <div className="hidden lg:flex space-x-5 text-base font-medium">

   {navLinks.map((link) => (
            <Link  key={link.title} href={link.path} className="hover:text-primary transition-colors duration-200">
              {link.title}
            </Link>
          ))}
    </div>
   
   <ModeToggle  />
   <div className="lg:hidden">
   <MobileDropdown navLinks={navLinks} />
   </div>
   </div></header>
   </nav>
  )
}
