import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    {
      src: "https://i.pinimg.com/564x/b0/bb/72/b0bb72b45720e2ccb8fe25ab7bd19d35.jpg",
      label: "Favorite one",
    },
    {
      src: "https://i.pinimg.com/474x/c6/d7/96/c6d796c5a30195cee71e3c5c043e955b.jpg",
      label: "Latest Arrival",
    },
    {
      src: "https://i.pinimg.com/564x/23/f4/f9/23f4f90b42017771155a1ee3e37f4c6d.jpg",
      label: "Our bestsellers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex items-center justify-center h-[50vh] sm:h-[40vh] lg:h-[28vw] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        <div className="relative h-full w-full lg:w-2/3 flex items-center">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[40vh] sm:h-[40vh] lg:h-[28vw] object-cover transition-opacity duration-500 ease-in-out"
          />
        </div>

        {/* Label Section */}
        <div className="mt-4 lg:mt-0 w-full lg:w-1/3 text-center lg:text-left lg:pl-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-800">
            {images[currentIndex].label}
          </h2>
          <div className="mt-2 flex items-center gap-2 justify-center lg:justify-start">
            <p className="w-12 sm:w-16 lg:w-20 h-[1px] bg-[#414141]"></p>
            <p className="text-sm sm:text-base font-semibold uppercase">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




