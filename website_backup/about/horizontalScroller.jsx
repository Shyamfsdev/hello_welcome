"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    year: 2010,
    content: "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
  },
  {
    year: 2012,
    content: "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
  },
  {
    year: 2015,
    content:"Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
  },
  {
    year: 2018,
    content: "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
  },
  {
    year: 2020,
    content: "Founded a decade ago, HUGE IT Solutions embarked on a mission to transform the digital landscape for businesses worldwide. What began as a small team of passionate developers has .",
  },
];

function HorizontalDynamicTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index) => {
    return index % 2 === 0
      ? "top-0 transform -translate-y-28 pt-10"
      : "bottom-0 transform translate-y-28 pb-10 ";
  };
  

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Milestones</h2>

      <div className="relative h-[500px] overflow-visible">
        {/* Timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-200 transform -translate-y-1/2 " />

        {/* Timeline dots and cards */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex-1 flex flex-col items-center">
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                }`}
              />

              {/* Card */}
              <AnimatePresence>
                {currentIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: index % 2 === 0 ? 20 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute w-48 ${getCardPosition(index)} w-[300px]`}
                  >
                    <Card className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.year}</h3>
                      <p className="text-sm text-gray-600">{item.content}</p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalDynamicTimeline;

