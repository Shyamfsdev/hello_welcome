import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./about.css";

const InfiniteScroll = () => {
  const scrollerInnerRef = useRef(null); // Create a ref for the scroller__inner element
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const milestones = [
    {
      year: 2010,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has.",
    },
    {
      year: 2012,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has.",
    },
    {
      year: 2025,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has.",
    },
    {
      year: 2023,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has.",
    },
  ];

  useEffect(() => {
    const scroller = scrollerInnerRef.current;
    const duplicatedContent = scroller.innerHTML;
    scroller.innerHTML += duplicatedContent;

    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
      });
    };

    const scrollerInner = scroller.querySelector(".scroller__inner");

    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });

      scrollerInner.addEventListener("mouseenter", () => {
        scrollerInner.style.animationPlayState = "paused";
      });
      scrollerInner.addEventListener("mouseleave", () => {
        scrollerInner.style.animationPlayState = "running";
      });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <>
      {/* Desktop menu */}
      <div
        className="hidden md:flex items-center justify-center w-full relative mt-5 md:h-1/2"
        style={{
          backgroundColor: "#F0F0F0",
          paddingBottom: "40px",
        }}
      >
        <div className="relative w-full max-w-screen-xl">
          <div className="scroller">
            <div className="line-container z-0">
              <div className="vertical-line"></div>
            </div>
            <div className="scroller__inner z-10" ref={scrollerInnerRef}>
              {milestones.map((item, index) => (
                // <div
                //   key={index}
                //   className={`milestone ${
                //     index % 2 === 0 ? "milestone-top" : "milestone-bottom"
                //   }`}
                // >
                //   <div className="dot-container z-20">
                //     <div
                //       className={
                //         index % 2 === 0 ? "dot-top" : "dot-bottom"
                //       }
                //     ></div>
                //   </div>
                //   <div className="content">
                //     <div className="year">{item.year}</div>
                //     <div className="description">{item.description}</div>
                //   </div>
                // </div>
                <div
                  key={index}
                  className={`milestone ${
                    index % 2 === 0 ? "milestone-top" : "milestone-bottom"
                  }`}
                >
                  <div className="dot-container z-20">
                    <div
                      className={index % 2 === 0 ? "dot-top" : "dot-bottom"}
                    ></div>
                  </div>
                  <div className="content group relative">
                    
                    <div className={index % 2 === 0 ? "description-top" : "description-bottom"}>{item.description}</div>
                    <div className={index % 2 === 0 ? "year-top" : "year-bottom"}>{item.year}</div>
                    {/* Tooltip */}
                    <div
                      className="tooltip absolute hidden group-hover:flex flex-col items-center z-30 rounded-md shadow-md"
                      style={{
                        bottom: index % 2 === 0 ? "-40px" : "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className="tooltip-arrow absolute bg-white w-3 h-3 rotate-45 z-20"
                        style={{
                          top: index % 2 === 0 ? "calc(100% - 56px)" : "24px",
                        }}
                      ></div>
                      <span className="text-sm text-gray-600">
                        {item.tooltip}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* <div id="mobile-menu" className="md:hidden">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full"
          >
            <div className="w-[400px] flex flex-col justify-center items-center">
              <div className="year">{item.year}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div> */}

<motion.div
      id="mobile-menu"
      className="md:hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {milestones.map((item, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="w-[400px] flex flex-col justify-center items-center">
            <motion.div
              className="year-mobile"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.year}
            </motion.div>
            <motion.div
              className="description-mobile"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.description}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    </>
  );
};

export default InfiniteScroll;
