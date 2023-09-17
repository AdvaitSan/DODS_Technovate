import React, { useState, useEffect } from "react";

const images = [
  "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527a395e02754bb57746389_slider1.jpg",
  "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299e51264213136f7d6a43_hoop.jpg",
  "https://images.unsplash.com/photo-1692791256961-b8797139ba2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  // Add more image URLs here

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change the delay (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute -mt-[550px] mx-4 duration-1000 max-w-full w-[1820px] h-[710px] ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
      
    </div>
  );
};

export default Carousel;
