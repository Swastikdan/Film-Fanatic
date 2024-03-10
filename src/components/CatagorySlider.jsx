"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // corrected import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import categories from "../../config/categories";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function CatagorySlider() {
  const [swiper, setSwiper] = useState(null);
  const router = useRouter();
  const [cat, setCat] = useState("");
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setCat(category);
    } else {
      setCat(""); // Reset category state when no category is selected
    }
  }, [router.asPath]);

  const handleClick = (vlaue) => {
    const fullUrl = new URL(window.location.href);
    fullUrl.searchParams.set("category", vlaue);
    router.replace(`/${fullUrl.search}`);
    setCat(vlaue);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex items-center w-full md:w-auto pl-3  ">
        {isLoading ? (
          <div></div>
        ) : (
          <button
            ref={prevButtonRef}
            className="prevButton hidden md:flex disabled:opacity-0 transition-all duration-200  p-[4px] rounded-full ring-[1.5px] ring-gray-500 shadow-xl hover:scale-105 hover:transition-all cursor-pointer mx-3 mb-3 "
          >
            <ChevronLeft width={18} height={18} />
            <span className="sr-only">Previous</span>
          </button>
        )}
        {isLoading ? (
          <div className="bg-gray-200 w-full h-12 -mt-3 mb-3 rounded-xl animate-pulse mx-[17px] "></div>
        ) : (
          <Swiper
            onSwiper={setSwiper}
            direction={"horizontal"}
            slidesPerView={4}
            mousewheel={true}
            slidesPerGroup={3}
            freeMode={true}
            navigation={{ nextEl: ".nextButton", prevEl: ".prevButton" }}
            breakpoints={{
              400: { slidesPerView: 5 },
              640: { slidesPerView: 6 },
              768: { slidesPerView: 7 },
              1120: { slidesPerView: 9 },
              1280: { slidesPerView: 10 },
              1536: { slidesPerView: 13 },
              1920: { slidesPerView: 14 },
              2560: { slidesPerView: 18 },
            }}
            modules={[FreeMode, Mousewheel, Navigation]}
            className="mySwiper"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div
                  className=" cursor-pointer active:scale-95 scale-100 transition-all duration-200 group"
                  onClick={() => handleClick(category.value)}
                >
                  <div
                    className={`flex flex-col items-center space-y-2 ${
                      category.value === cat ? "opacity-100  " : "opacity-70"
                    }`}
                  >
                    <div>
                      {/* <Image
                        
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1WwAJFgOmu+DJrAAAAABJRU5ErkJggg=="
                        src={category.icon}
                        alt={category.name}
                        width={24}
                        height={24}
                        quality={100}
                        onload={(e) => {
                          e.target.onerror = null; // To prevent infinite loop in case fallback image also fails
                          e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1WwAJFgOmu+DJrAAAAABJRU5ErkJggg=='; // Replace with your fallback image
                        }}
                      /> */}
                      <Avatar className="rounded-none h-5 w-5">
                        <AvatarImage
                          src={category.icon}
                          alt={category.name}
                          width={20}
                          height={20}
                        />
                        <AvatarFallback className="rounded-sm">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1WwAJFgOmu+DJrAAAAABJRU5ErkJggg=="
                            alt=""
                            srcset=""
                          />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs  text-gray-700 group-hover:border-b-2 pb-3   group-hover:border-black/40 ${
                        category.value === cat
                          ? "font-bold border-b-2 border-black pb-3"
                          : "font-medium border-b-2 border-white/0"
                      }`}
                    >
                      {category.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isLoading ? (
          <div></div>
        ) : (
          <button
            ref={nextButtonRef}
            className="nextButton hidden md:flex disabled:opacity-0 transition-all duration-200  p-[4px] rounded-full ring-[1.5px] ring-gray-500 shadow-xl hover:scale-105 hover:transition-all cursor-pointer ml-3 mb-3  "
          >
            <ChevronRight width={18} height={18} />
            <span className="sr-only">Next</span>
          </button>
        )}
      </div>
    </>
  );
}

// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // corrected import
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import categories from "../../config/categories";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function CatagorySlider() {
//   const [swiper, setSwiper] = useState(null);
//   const router = useRouter();
//   const [cat, setCat] = useState("");
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const category = params.get("category");
//     if (category) {
//       setCat(category);
//     }
//   }, [router.asPath]);

//   const handleClick = (vlaue) => {
//     const fullUrl = new URL(window.location.href);
//     fullUrl.searchParams.set("category", vlaue);
//     router.replace(`/${fullUrl.search}`);
//     setCat(vlaue);
//   };
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 0); // Adjust the delay as needed

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <>
//       <div className="flex items-center w-full md:w-auto px-2 ">
//         <button
//           ref={prevButtonRef}
//           className="prevButton hidden md:flex disabled:opacity-0 transition-all duration-200  p-[4px] rounded-full ring-[1.5px] ring-gray-500 shadow-xl hover:scale-105 hover:transition-all cursor-pointer mr-3 mb-3 "
//         >
//           <ChevronLeft width={18} height={18} />
//           <span className="sr-only">Previous</span>
//         </button>
//         {isLoading ? (
//           <div className="bg-gray-200 w-full h-12 rounded-xl animate-pulse "></div>
//         ) : (
//           <Swiper
//             onSwiper={setSwiper}
//             direction={"horizontal"}
//             slidesPerView={3.5}
//             mousewheel={true}
//             slidesPerGroup={3}
//             freeMode={true}
//             navigation={{ nextEl: ".nextButton", prevEl: ".prevButton" }}
//             breakpoints={{
//               400: { slidesPerView: 4.5 },
//               640: { slidesPerView: 5.5 },
//               768: { slidesPerView: 6.5 },
//               1120: { slidesPerView: 8.5 },
//               1280: { slidesPerView: 9.5 },
//               1536: { slidesPerView: 11.5 },
//               1920: { slidesPerView: 13.5 },
//               2560: { slidesPerView: 17.5 },
//             }}
//             modules={[FreeMode, Mousewheel, Navigation]}
//             className="mySwiper"
//           >
//             {categories.map((category, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className=" cursor-pointer active:scale-95 scale-100 transition-all duration-200 group"
//                   onClick={() => handleClick(category.value)}
//                 >
//                   <div
//                     className={`flex flex-col items-center space-y-2 ${
//                       category.value === cat ? "opacity-100  " : "opacity-70"
//                     }`}
//                   >
//                     <div>
//                       <Image
//                         priority={true}
//                         src={category.icon}
//                         alt={category.name}
//                         width={24}
//                         height={24}
//                         quality={100}
//                       />
//                     </div>
//                     <span
//                       className={`text-[10px] sm:text-xs  text-gray-700 group-hover:border-b-2 pb-3 group-hover:border-black/40 ${
//                         category.value === cat
//                           ? "font-bold border-b-2 border-black pb-3"
//                           : "font-medium"
//                       }`}
//                     >
//                       {category.name}
//                     </span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//         <button
//           ref={nextButtonRef}
//           className="nextButton hidden md:flex disabled:opacity-0 transition-all duration-200  p-[4px] rounded-full ring-[1.5px] ring-gray-500 shadow-xl hover:scale-105 hover:transition-all cursor-pointer ml-3 mb-3  "
//         >
//           <ChevronRight width={18} height={18} />
//           <span className="sr-only">Next</span>
//         </button>
//       </div>
//     </>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // corrected import
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import categories from "../../config/categories";
// import {ChevronLeft , ChevronRight} from 'lucide-react';
// export default function CatagorySlider() {
// const [swiper, setSwiper] = useState(null);
//   const router = useRouter();
//   const [cat, setCat] = useState("");

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const category = params.get("category");
//     if (category) {
//       setCat(category);
//     }
//   }, [router.asPath]);

//   const handleClick = (name) => {
//     const fullUrl = new URL(window.location.href);
//     fullUrl.searchParams.set("category", name);
//     router.replace(`/${fullUrl.search}`);
//     setCat(name);
//   };

//   return (
//     <>
//       <div className="flex items-center w-full md:w-auto px-2 ">
//         <button className="prevButton hidden md:flex">
//         <ChevronLeft />

//         <span className="sr-only">Previous</span>        </button>
//         <Swiper

//           direction={"horizontal"}
//           slidesPerView={3.5}
//           spaceBetween={10}
//           mousewheel={true}
//           slidesPerGroup={3}
//           freeMode={true}
//           navigation={{ nextEl: ".nextButton", prevEl: ".prevButton" }}
//           breakpoints={{
//             640: { slidesPerView: 3.5 },
//             768: { slidesPerView: 4.5 },
//             1120: { slidesPerView: 6.5 },
//             1280: { slidesPerView: 7.5 },
//             1536: { slidesPerView: 8.5 },
//             1920: { slidesPerView: 9.5 },
//             2560: { slidesPerView: 14.5 },
//           }}
//           modules={[FreeMode, Mousewheel, Navigation]}
//           className="mySwiper"
//         >
//           {categories.map((category, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className=" cursor-pointer active:scale-95 scale-100 transition-all duration-200"
//                 onClick={() => handleClick(category.name)}
//               >
//                 <div
//                   className={`flex flex-col items-center space-y-2 ${
//                     category.name === cat ? "opacity-100  " : "opacity-70"
//                   }`}
//                 >
//                   <Image
//                     src={category.icon}
//                     alt={category.name}
//                     width={24}
//                     height={24}
//                     quality={100}
//                   />
//                   <span
//                     className={`text-xs  text-gray-700 ${
//                       category.name === cat
//                         ? "font-bold border-b-4 border-black pb-3"
//                         : "font-medium"
//                     }`}
//                   >
//                     {category.name}
//                   </span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button className="nextButton hidden md:flex ">Next</button>{" "}
//       </div>
//     </>
//   );
// }

// "use client";
// import React, { useRef, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // corrected import
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Mousewheel,Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import categories from '../../config/categories';

// export default function CatagorySlider() {
//     const swiperRef = useRef(null);
//     const router = useRouter();
//     const [cat, setCat] = useState("");

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const category = params.get('category');
//         if (category) {
//             setCat(category);
//         }
//     }, [router.asPath]);

//     const handleClick = (name) => {
//         const fullUrl = new URL(window.location.href);
//         fullUrl.searchParams.set("category", name);
//         router.replace(`/${fullUrl.search}`);
//     };

//     return (
//         <>
//         <div className='flex items-center w-full md:w-3/4'>
//         <button className="prevButton hidden md:flex">Previous</button>

//         <Swiper
//             ref={swiperRef}
//             direction={'horizontal'}
//             slidesPerView={3.5}
//             spaceBetween={10}
//             mousewheel={true}
//             slidesPerGroup={3}
//             freeMode ={true}
//             navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}
//             breakpoints={ {

//                 640: { slidesPerView: 3.5, spaceBetween: 30 },
//                 768: { slidesPerView: 4.5, spaceBetween: 30 },
//                 1120: { slidesPerView: 6.5, spaceBetween: 40 },
//                 1280: { slidesPerView: 7.5, spaceBetween: 40 },
//                 1536: { slidesPerView: 8.5, spaceBetween: 40 },
//                 1920: { slidesPerView: 9.5, spaceBetween: 40 },
//                 2560: { slidesPerView: 14.5, spaceBetween: 40 },
//               }}

//             modules={[FreeMode,Mousewheel,Navigation]}
//             className="mySwiper"
//         >
//             {categories.map((category, index) => (
//                 <SwiperSlide key={index}>
//                     <div className=""  onClick={() => handleClick(category.name)}>
//             <div className={`flex flex-col items-center space-y-2 ${
//                 category.name === cat
//                     ? "inline-block border-b-4 border-blue-500 font-bold"
//                     : ""
//             }`}>
//                 <Image src={category.icon} alt={category.name} width={24} height={24} quality={100} />
//                 <span className="text-xs font-medium text-gray-700">{category.name}</span>
//             </div>
//         </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//         <button className="nextButton hidden md:flex">Next</button> </div></>
//     );
// }

// "use client";
// import React, { useRef, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import categories from '../../config/categories';

// const CatagoryCard = ({ name, icon, className, onClick, active }) => {
//     return (
//         <div className={`${className} ${
//             category.name === cat
//               ? "inline-block border-b-4 border-blue-500 font-bold"
//               : ""
//           }`} onClick={onClick}>
//             <div className="flex flex-col items-center space-y-2">
//                 <Image src={icon} alt={name} width={24} height={24} />
//                 <span className="text-xs font-medium text-gray-700">{name}</span>
//             </div>
//         </div>
//     );
// };

// export default function CatagorySlider() {
//     const swiperRef = useRef(null);
//     const router = useRouter();
//     const [cat, setCat] = useState("");

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const category = params.get('category');
//         if (category) {
//             setCat(category);
//         }
//     }, [router.asPath]);

//     const handleClick = (name) => {
//         const fullUrl = new URL(window.location.href);
//         fullUrl.searchParams.set("category", name);
//         router.replace(`/${fullUrl.search}`);
//     };

//     return (
//         <>
//         <div className='flex items-center w-full md:w-3/4'>
//         <button className="prevButton hidden md:flex">Previous</button>

//         <Swiper
//             ref={swiperRef}
//             slidesPerView={3.5}
//             spaceBetween={10}
//             slidesPerGroup={4}
//             freeMode ={true}
//             navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}  modules={[Navigation]}
//             className="mySwiper"
//         >
//             {categories.map((category, index) => (
//                 <SwiperSlide key={index}>
//                     <CatagoryCard
//                         name={category.name}
//                         icon={category.icon}
//                         onClick={() => handleClick(category.name)}

//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//         <button className="nextButton hidden md:flex">Next</button> </div></>
//     );
// }

// "use client";
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import categories from '../../config/categories';

// const CatagoryCard = ({ name, icon, className, onClick }) => {
//     return (
//         <div className={className} onClick={onClick}>
//             <div className="flex flex-col items-center space-y-2">
//                 <Image src={icon} alt={name} width={24} height={24} />
//                 <span className="text-xs font-medium text-gray-700">{name}</span>
//             </div>
//         </div>
//     );
// };

// export default function CatagorySlider() {
//     const router = useRouter();

//     const handleClick = (value) => {
//         router.push(`/?category=${value}`);
//     };

//     return (
//         <>
//         <div className='flex items-center w-full md:w-3/4'>
//         <button className="prevButton hidden md:flex">Previous</button>

//         <Swiper
//             slidesPerView={3.5}
//             spaceBetween={10}
//             slidesPerGroup={4}
//             freeMode ={true}
//             navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}  modules={[Navigation]}
//             className="mySwiper"
//         >
//             {categories.map((category, index) => (
//                 <SwiperSlide key={index}>
//                     <CatagoryCard
//                         name={category.name}
//                         icon={category.icon}
//                         onClick={() => handleClick(category.value)}
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//         <button className="nextButton hidden md:flex">Next</button> </div></>
//     );
// }
