"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import "./about.css"
import {CarouselPlugin} from "./carousel-timeline"
import ParallaxSection from "./ParallaxSection"
import MilestoneTimeline from "./carousel-timeline"
import AutoSlider from "./AutoSlider"
import HorizontalDynamicTimeline from "./horizontalScroller"
import InfiniteScroll from "./infiniteScroller"


const Milestones = () => {
  const milestones = [
    {  
      year: 2010,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },
    {
      year: 2012,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },
    {
      year: 2015,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },
    {
      year: 2017,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },
    {
      year: 2019,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },
    {
      year: 2021,
      description:
        "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically slide left every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % milestones.length);
  //   }, 1000); // Slide every 3 seconds

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, [milestones.length]);


    useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 2) % milestones.length);
    }, 2000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [milestones.length]);



  return (

<>


<div className="relative">
    <ParallaxSection className="z-0"/>


    <div className="bg-[#f0f0f0] overflow-hidden z-0">
      {/* Title */}
      <div className="flex items-center justify-center py-8 z-10">
        <h1 className="text-4xl font-bold text-gray-800 z-30">Milestone</h1>
      </div>

      {/* Milestone Section */}
      <InfiniteScroll />
    </div>

</div>





    {/* <div className="min-h-screen flex flex-col items-center justify-center bg-white">
  <div className="container max-w-7xl mx-auto md:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We understand how hard it is for you to find the perfect development
        partners. At Huge IT Solutions, our experts will provide the
        consulting you need, analyze your requirements, and deliver the best
        solutions tailored to your industry.
      </p>
    </div>

    <div className="relative mt-10 w-full flex justify-center">
      <div
        className="absolute flex justify-center items-center text-gray-100 font-bold text-center hidden md:flex"
        style={{
          fontSize: "169px", // Adjust size to be larger than image
          lineHeight: "1",
          top: "-47px", // Positioning above the image
          zIndex: 0,
        }}
      >
        Huge Family
      </div>

      <div className="relative z-10">
        <img
          src="/images/about/aboutFamily.png"
          alt="Team"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  </div>
</div> */}


    <div className="bg-gray-50 py-16">
      <div className="container max-w-7xl mx-auto md:px-6 lg:px-8 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
        <p className="text-gray-600 mb-10">
          We understand how hard it is for you to find the perfect development partners. At Huge IT
          Solutions, our experts will provide the consulting you need, analyze your requirements,
          and deliver the best solutions tailored to your industry and needs. Let us help you
          achieve your digital goals. Reach out to us now for a consultation and take the first step
          towards a powerful online presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Visual Storytelling", id: 1 },
            { title: "Team Highlights", id: 2 },
            { title: "Dynamic Testimonials", id: 3 },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-70 relative rounded-2xl">
                <img
                  src="/images/about/aboutCard.svg"
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  style={{padding:"10px 10px",borderRadius:"20px"}}
                />
              </div>
              <div className="p-1">
                <h3 className="text-lg font-bold text-gray-800 pb-3">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <section className="container max-w-7xl mx-auto md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 py-12">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Our Commitment to <br /> Sustainability
        </h2>
        <p className="text-gray-600 leading-7">
          Apply a modern design with updated colors, typography, and layout
          elements to improve visual appeal. Reorganize the menu and consider
          adding a search function for easier information retrieval. Utilize
          visuals, infographics, and interactive elements to better present
          services and certifications. Ensure that the mobile experience is
          seamless and responsive across various devices. A modernized design
          and improved content presentation will likely lead to higher user
          engagement and longer site visits. Streamlined navigation and a
          better mobile experience will make it easier for users to find
          information and interact with the site.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/images/about/about.png"
          alt="Group of people discussing sustainability"
          className="rounded-lg shadow-lg"
          width={600}
          height={400}
        />
      </div>
    </section>


    {/* <CarouselPlugin milestones={milestones} /> */}

    {/* <MilestoneTimeline milestones={milestones}/> */}


    {/* <HorizontalDynamicTimeline /> */}

    </>
  );
};

export default Milestones;