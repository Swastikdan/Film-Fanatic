// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 0); // Adjust the delay as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="flex items-center w-full md:w-auto pl-3 relative">
//         <button
//           ref={prevButtonRef}
//   className="prevButton  hidden md:flex md:absolute md:z-10 disabled:opacity-0 transition-all duration-200  rounded-full  shadow-xl hover:scale-105 hover:transition-all cursor-pointer mx-3 mb-3 "
// >
//   <ArrowCircleLeft size={48} weight="duotone" />
//   <span className="sr-only">Previous</span>
// </button>
//         <Swiper
//           direction={"horizontal"}
//           slidesPerView={4}
//           mousewheel={true}
//           slidesPerGroup={3}
//           freeMode={true}
//           navigation={{ nextEl: ".nextButton", prevEl: ".prevButton" }}
//           modules={[FreeMode, Mousewheel, Navigation]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
// <img
//   src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//   class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//   alt="Aquaman and the Lost Kingdom media images"
//   width="1200"
//   height="720"
//   loading="lazy"
//   decoding="async"
// />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
//               class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//               alt="Aquaman and the Lost Kingdom media images"
//               width="1200"
//               height="720"
//               loading="lazy"
//               decoding="async"
//             />
//           </SwiperSlide>
//         </Swiper>
//         <button
//           ref={nextButtonRef}
//           className="nextButton  hidden md:flex md:absolute md:z-10 right-0 disabled:opacity-0 transition-all duration-200  p-[4px] rounded-full  shadow-xl hover:scale-105 hover:transition-all cursor-pointer mr-3 mb-3  "
//         >
//   <ArrowCircleRight size={48} weight="duotone" />
//   <span className="sr-only">Next</span>
// </button>
//       </div>
//     </>
//   );
// }

// import { useRef, useState, useEffect } from "react";
// import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

// export default function App() {
//     const [isLoading, setIsLoading] = useState(true);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 0); // Adjust the delay as needed

//         return () => clearTimeout(timer);
//     }, []);

//     const handlePrevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? prevIndex : prevIndex - 1
//         );
//     };

//     const handleNextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === slides.length - 1 ? prevIndex : prevIndex + 1
//         );
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     const slides = [
//         "https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
//         "https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
//         "https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
//         "https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
//         // Add other slide URLs as needed
//     ];

//     return (
//         <div className="flex items-center w-full md:w-auto pl-3 relative">
//             <button
//                 className="prevButton hidden md:flex md:absolute md:z-10 disabled:opacity-0 transition-all duration-200 rounded-full shadow-xl hover:scale-105 hover:transition-all cursor-pointer mx-3 mb-3"
//                 onClick={handlePrevSlide}
//                 disabled={currentIndex === 0}
//             >
//                 <ArrowCircleLeft size={48} weight="duotone" />
//                 <span className="sr-only">Previous</span>
//             </button>
//             <div className="mySwiper">
//                 <div
//                     className="swiper-inner"
//                     ref={sliderRef}
//                     style={{
//                         display: "flex",
//                         transform: `translateX(-${currentIndex * 100}%)`,
//                         transition: "transform 0.5s ease-in-out",
//                     }}
//                 >
//                     {slides.map((slide, index) => (
//                         <div key={index} className="swiper-slide">
//                             <img
//                                 src={slide}
//                                 className="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
//                                 alt="Aquaman and the Lost Kingdom media images"
//                                 width="1200"
//                                 height="720"
//                                 loading="lazy"
//                                 decoding="async"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="nextButton hidden md:flex md:absolute md:z-10 right-0 disabled:opacity-0 transition-all duration-200 p-[4px] rounded-full shadow-xl hover:scale-105 hover:transition-all cursor-pointer mr-3 mb-3"
//                 onClick={handleNextSlide}
//                 disabled={currentIndex === slides.length - 1}
//             >
//                 <ArrowCircleRight size={48} weight="duotone" />
//                 <span className="sr-only">Next</span>
//             </button>
//         </div>
//     );
// }

import React, { useEffect, useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const ScrollableContainer = ({ containerId }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scrollAmount = (direction) => {
            const amount = window.innerWidth * 0.7 * direction;
            container.scrollBy({ top: 0, left: amount, behavior: "smooth" });
        };

        const hideButtons = () => {
            const prevButton = document.getElementById(`${containerId}-prev`);
            const nextButton = document.getElementById(`${containerId}-next`);

            prevButton.style.display = container.scrollLeft <= 0 ? "none" : "block";
            nextButton.style.display =
                container.scrollLeft + container.offsetWidth >= container.scrollWidth
                    ? "none"
                    : "block";
        };

        const handleScroll = () => {
            hideButtons();
        };

        hideButtons();
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [containerId]);

    return (
      <div className={`relative ${containerId}`}>
        <button
          id={`${containerId}-prev`}
          className="prevButton hidden md:flex md:absolute md:z-10 disabled:opacity-0 transition-all duration-200 rounded-full shadow-xl hover:scale-105 hover:transition-all cursor-pointer mx-3 mb-3"
          onClick={() => scrollAmount(-1)}
        >
          <ArrowCircleLeft size={48} weight="duotone" />
          <span className="sr-only">Previous</span>
        </button>
        <div
          ref={containerRef}
          id={containerId}
          className="flex space-x-4 overflow-x-auto whitespace-nowrap py-5 scrollbar-hide dragscroll active:cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <img
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
            class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
            alt="Aquaman and the Lost Kingdom media images"
            width="1200"
            height="720"
            loading="lazy"
            decoding="async"
          />
          <img
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
            class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
            alt="Aquaman and the Lost Kingdom media images"
            width="1200"
            height="720"
            loading="lazy"
            decoding="async"
          />
          <img
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg"
            class="aspect-auto min-h-40 sm:min-h-56 object-cover rounded-lg bg-gray-500"
            alt="Aquaman and the Lost Kingdom media images"
            width="1200"
            height="720"
            loading="lazy"
            decoding="async"
          />
        </div>
        <button
          id={`${containerId}-next`}
          className="nextButton hidden md:flex md:absolute md:z-10 right-0 disabled:opacity-0 transition-all duration-200 p-[4px] rounded-full shadow-xl hover:scale-105 hover:transition-all cursor-pointer mr-3 mb-3"
          onClick={() => scrollAmount(1)}
        >
          <ArrowCircleRight size={48} weight="duotone" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    );
};

export default ScrollableContainer;

