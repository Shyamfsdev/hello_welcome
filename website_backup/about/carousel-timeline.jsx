// // import * as React from "react"
// // import Autoplay from "embla-carousel-autoplay"

// // import { Card, CardContent } from "@/components/ui/card"
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel"

// // export function CarouselPlugin({milestones}) {
// //   const plugin = React.useRef(
// //     Autoplay({ delay: 2000, stopOnInteraction: true })
// //   )

// //   return (
// //     <>
// //      <div className="flex items-center justify-center py-8">
// //         <h1 className="text-4xl font-bold text-gray-800">Milestone</h1>
// //     </div>

// //     <Carousel
// //       plugins={[plugin.current]}
// //       className="w-full max-w-xs"
// //       onMouseEnter={plugin.current.stop}
// //       onMouseLeave={plugin.current.reset}
// //     >
// //       <CarouselContent>
// //         {milestones.map((item, index) => (
// //           <CarouselItem key={index}>
// //             <div  key={index} className="p-1 flex w-4 h-4 bg-yellow-400 rounded-full relative border border-gray-200">
// //               <Card>
// //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// //                 <div
// //                 className={`absolute w-full text-center text-lg font-semibold left-[-11px] 
// //                 ${index === 0 ? "top-[30px]" : index === 1 ? "bottom-[30px]" : index === 2 ? "top-[30px]" : index % 2 === 0 ? "top-[-30px]" : "bottom-[-30px]"}`}
// //               >
// //                 {item.year}
// //               </div>

// //               {/* Description */}
// //               <div
// //                 className={`absolute w-[350px] text-center bg-white p-4 text-base left-[-157px] 
// //                 ${index === 0 ? "bottom-[50px]" : index === 1 ? "top-[50px]" : index === 2 ? "bottom-[50px]" : index % 2 !== 0 ? "bottom-[50px]" : "top-[50px]"}`}
// //               >
// //                 {item.description}
// //               </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </CarouselItem>
// //         ))}
// //       </CarouselContent>
// //       <CarouselPrevious />
// //       <CarouselNext />
// //     </Carousel>
// //     </>
// //   )
// // }


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MilestoneTimeline = ({milestones }) => {


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-[#f0f0f0] overflow-hidden z-2">
//       {/* Title */}
//       <div className="flex items-center justify-center py-8">
//         <h1 className="text-4xl font-bold text-gray-800">Milestone</h1>
//       </div>

//       {/* Milestone Section */}
//       <div className="flex items-center justify-center h-screen">
//         <div className="relative w-full max-w-5xl">
//           {/* Line */}
//           <div className="sm:flex absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300"></div>

//           {/* Milestone Slider for Mobile */}
//           <div className="sm:hidden px-4">
//             <Slider {...settings}>
//               {milestones.map((item, index) => (
//                 <div key={index} className="w-full mb-4">
//                   <div className="text-center text-lg font-semibold">
//                     {item.year}
//                   </div>
//                   <div className="text-center bg-white p-4 text-base rounded-lg shadow-md">
//                     {item.description}
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Milestone Markers for Desktop */}
//           <div className="hidden sm:flex justify-between items-center relative px-16">
//             {milestones.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-4 h-4 bg-yellow-400 rounded-full relative border border-gray-200"
//               >
//                 {/* Year */}
//                 <div
//                   className={`absolute w-full text-center text-lg font-semibold left-[-11px] 
//                   ${index % 2 === 0 ? "top-[-30px]" : "bottom-[-30px]"}`}
//                 >
//                   {item.year}
//                 </div>

//                 {/* Description */}
//                 <div
//                   className={`absolute w-[350px] text-center bg-white p-4 text-base rounded-lg shadow-md left-[-157px] 
//                   ${index % 2 === 0 ? "top-[50px]" : "bottom-[50px]"}`}
//                 >
//                   {item.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MilestoneTimeline;


// import React, { useState, useEffect } from 'react';

// const MilestoneCarousel = ({ milestones }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     let interval;

//     const updateActiveIndex = () => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === milestones.length - 1 ? 0 : prevIndex + 1
//       );
//     };

//     interval = setInterval(updateActiveIndex, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [milestones.length]);

//   const handlePrevClick = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? milestones.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === milestones.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="flex items-center justify-center h-screen relative">
//       <div className="relative w-full max-w-5xl">
//         {/* Moving line */}
//         <div
//           className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-500"
//           style={{
//             backgroundSize: `${100 / milestones.length}% 100%`,
//             backgroundPositionX: `${(activeIndex / (milestones.length - 1)) * 100}%`,
//           }}
//         ></div>

//         {/* Milestone Markers for Mobile */}
//         <div className="sm:hidden flex flex-col items-center px-4">
//           <div
//             className="flex flex-col transition-transform duration-500"
//             style={{
//               transform: `translateX(-${activeIndex * 50}%)`,
//               width: `${milestones.length > 1 ? milestones.length * 50 : 50}%`,
//             }}
//           >
//             {milestones.map((item, index) => (
//               <div key={index} className="w-full mb-4">
//                 <div className="text-center text-lg font-semibold">
//                   {item.year}
//                 </div>
//                 <div className="text-center bg-white p-4 text-base rounded-lg">
//                   {item.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Milestone Markers for Desktop */}
//         <div className="hidden sm:flex justify-between items-center relative px-16">
//           <div
//             className="flex justify-between items-center transition-transform duration-500"
//             style={{
//               transform: `translateX(-${activeIndex * (100 / milestones.length)}%)`,
//               width: `${milestones.length * 25}%`,
//             }}
//           >
//             {milestones.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0 relative border border-gray-200"
//               >
//                 {/* Year */}
//                 <div
//                   className={`absolute w-full text-center text-lg font-semibold left-[-11px] 
//                     ${index === 0 ? "top-[30px]" : index === 1 ? "bottom-[30px]" : index === 2 ? "top-[30px]" : index % 2 === 0 ? "top-[-30px]" : "bottom-[-30px]"}`}
//                 >
//                   {item.year}
//                 </div>

//                 {/* Description */}
//                 <div
//                   className={`absolute w-[350px] text-center bg-white p-4 text-base left-[-157px] 
//                     ${index === 0 ? "bottom-[50px]" : index === 1 ? "top-[50px]" : index === 2 ? "bottom-[50px]" : index % 2 !== 0 ? "bottom-[50px]" : "top-[50px]"}`}
//                 >
//                   {item.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation dots */}
//         <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
//           {milestones.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 activeIndex === index ? 'bg-yellow-400' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Previous button */}
//       <button
//         onClick={handlePrevClick}
//         className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-white"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
//         </svg>
//       </button>

//       {/* Next button */}
//       <button
//         onClick={handleNextClick}
//         className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-white"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default MilestoneCarousel;







import React, { useState, useEffect } from 'react';

const MilestoneCarousel = ({ milestones }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval;

    const updateActiveIndex = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === milestones.length - 1 ? 0 : prevIndex + 1
      );
    };

    interval = setInterval(updateActiveIndex, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [milestones.length]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? milestones.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === milestones.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-screen relative px-20 ms-10" style={{width:"70vw"}}>
      <div className="relative w-full max-w-md text-center">
        {/* Line */}
        <div className="sm:flex absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300"></div>

        {/* Moving yellow dot */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full transition-all duration-500"
          style={{
            left: `${(activeIndex / (milestones.length - 1)) * 300}%`,
          }}
        ></div>

        {/* Milestone Markers for Mobile */}
        <div className="sm:hidden flex flex-col items-center px-4">
          <div
            className="flex flex-col transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * 300}%)`,
              width: `${milestones.length > 1 ? milestones.length * 300 : 300}%`,
            }}
          >
            {milestones.map((item, index) => (
              <div key={index} className="w-full mb-4">
                <div className="text-center text-lg font-semibold">
                  {item.year}
                </div>
                <div className="text-center bg-white p-4 text-base rounded-lg">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Markers for Desktop */}
        <div className="hidden sm:flex justify-between items-center relative">
          <div
            className="flex justify-between items-center transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * (100 / milestones.length)}%)`,
              width: `${milestones.length * 25}%`,
            }}
          >
            {milestones.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
              >
                {/* Year */}
                <div
                  className={`absolute w-full text-center text-lg font-semibold left-[-320px] 
                    ${index === 0 ? "top-[30px]" : index === 1 ? "bottom-[30px]" : index === 2 ? "top-[30px]" : index % 2 === 0 ? "top-[-30px]" : "bottom-[-30px]"}`}
                >
                  {item.year}
                </div>

                {/* Description */}
                <div
                  className={`absolute w-[400px] text-center bg-white p-4 text-base 
                    ${index === 0 ? "bottom-[50px] left-[-150px] " : index === 1 ? "top-[10px]" : index === 2 ? "bottom-[10px]" : index % 2 !== 0 ? "bottom-[10px]" : "top-[10px]"}`}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MilestoneCarousel;

