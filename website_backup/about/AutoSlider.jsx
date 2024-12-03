import React, { useState, useEffect } from 'react';

const AutoSlider = ({ milestones }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Line */}
        {/* <div className="sm:flex absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300"></div> */}

        {/* Milestone Markers for Mobile */}
        <div className="sm:hidden flex flex-col items-center px-4 overflow-hidden">
          <div
            className="flex flex-col animate-slide"
            style={{
              animation: `slide ${milestones.length * 5}s linear infinite`,
            }}
          >
            {milestones.concat(milestones).map((item, index) => (
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
        <div className="hidden sm:flex justify-between items-center relative px-24 overflow-hidden">
          <div
            className="flex animate-slide"
            style={{
              animation: `slide ${milestones.length * 5}s linear infinite`,
            }}
          >
            {milestones.concat(milestones).map((item, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-yellow-400 rounded-full relative border border-gray-200"
              >
                {/* Year */}
                <div
                  className={`absolute w-full text-center text-lg font-semibold left-[-11px] 
                  ${index % 2 === 0 ? "top-[-30px]" : "bottom-[-30px]"}`}
                >
                  {item.year}
                </div>

                {/* Description */}
                <div
                  className={`absolute w-[350px] text-center bg-white p-4 text-base left-[-157px] 
                  ${index % 2 === 0 ? "top-[50px]" : "bottom-[50px]"}`}
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

export default AutoSlider;
