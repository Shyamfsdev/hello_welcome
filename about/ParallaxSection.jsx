// import React, { useEffect } from "react";
// import { useSpring, animated } from "react-spring";

// const ParallaxSection = () => {
//   const [props, set] = useSpring(() => ({
//     opacity: 1,
//     transform: "translateY(0px)",
//   }));

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     set({ opacity: 1, transform: `translateY(${offset * 0.2}px)` });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <div className="relative bg-white overflow-visible z-0 ">
//       <div className="container max-w-7xl mx-auto md:px-6 lg:px-8">
//         {/* Parallax Background */}
//         <animated.div
//           style={{
//             ...props,
//             backgroundImage: "url(/images/about/vector.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "500px",
//             width: "100%",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: -1,
//           }}
//         ></animated.div>

//         {/* Content */}
//         <div className="relative z-10 p-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center justify-center pb-10">
//             About Us
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
//             {/* Image Section */}
//             <div className="flex justify-center">
//               <img
//                 src="/images/about/aboutUs.png"
//                 alt="Team"
//                 className="w-full max-w-md"
//               />
//             </div>

//             {/* Text Section */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Our Story
//               </h2>
//               <p className="text-gray-600 leading-relaxed sm:text-sm md:text-base ">
//                 Founded a decade ago, HUGE IT Solutions embarked on a mission to
//                 transform the digital landscape for businesses worldwide. What
//                 began as a small team of passionate developers has evolved into
//                 a leading software and service provider, dedicated to delivering
//                 innovative solutions tailored to our clients’ unique needs. Our
//                 journey is marked by relentless dedication, a commitment to
//                 excellence, and a deep understanding of the ever-evolving
//                 technology landscape. We pride ourselves on being more than just
//                 a service provider; we are a trusted partner in our clients’
//                 growth stories.
//               </p>
//             </div>
//           </div>
          
        
//         </div>
//       </div>

     
//     </div>

//     <div className="flex items-center justify-center w-full" style={{backgroundColor:"#F0F0F0"}}>
//     <div className="invisible" style={{backgroundColor:"#F0F0F0"}}>
//     <h1 className="text-4xl font-bold text-gray-800 mt-8 w-full " style={{backgroundColor:"#F0F0F0"}}>Milestone</h1>
//     </div>
//     </div>
// </>
//   );
// };

// export default ParallaxSection;


import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ParallaxSection = () => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
    transform: "translateY(0px)",
  }));

  const handleScroll = () => {
    const offset = window.scrollY;
    set({ opacity: 1, transform: `translateY(${offset * 0.2}px)` });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-white overflow-visible z-0">
        <div className="container max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          {/* Parallax Background */}
          <animated.div
            style={{
              ...props,
              backgroundImage: "url(/images/about/vector.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></animated.div>

          {/* Content */}
          <div className="relative z-10 p-0 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center pb-6">
              About Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center translate-x-10">
                <img
                  src="/images/about/aboutUs.png"
                  alt="Team"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>

              {/* Text Section */}
              <div className="bg-[#f0f0f0] md:bg-transparent p-5 md:p-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Our Story
                </h2> 
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base ">
                  Founded a decade ago, HUGE IT Solutions embarked on a mission to
                  transform the digital landscape for businesses worldwide. What
                  began as a small team of passionate developers has evolved into
                  a leading software and service provider, dedicated to delivering
                  innovative solutions tailored to our clients’ unique needs. Our
                  journey is marked by relentless dedication, a commitment to
                  excellence, and a deep understanding of the ever-evolving
                  technology landscape. We pride ourselves on being more than just
                  a service provider; we are a trusted partner in our clients’
                  growth stories.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div style={{height:"200px"}} className="bg-[#f0f0f0] absolute bottom-0"> 

        </div>
      </div>

      {/* Milestone Section */}
      {/* <div
        className="flex items-center justify-center w-full bg-[#f0f0f0]" 
      >
        <div className="w-full text-center">
          <h1 className="invisible text-3xl sm:text-4xl font-bold text-gray-800 mt-8">
            Milestone
          </h1>
        </div>
      </div> */}
    </>
  );
};

export default ParallaxSection;


