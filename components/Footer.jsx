import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="  bg-gray-50 dark:bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10 py-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex space-x-2 items-center justify-center sm:justify-start"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-10 h-10"
              />
              
              <span className="text-xl  lg:text-2xl  xl:text-3xl font-semibold">
                Film Fanatic
              </span>
            </Link>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 lg:mt-0 lg:text-right">
              Copyright &copy; {year}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
