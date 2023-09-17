import React, { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "https://ipfs.io/ipfs/bafkreihszzpygjhq5aijhzz66j6fhjx5m27ie3adowzcz47qlp6vv4lsqy",
  "https://ipfs.io/ipfs/bafkreiax7errdzqzunxquaovnvuetiuhr52s2qxhno6x4ooxn6dr3b4jm4",
  "https://ipfs.io/ipfs/bafkreiceovlya7a2nwb2xtjliwvbnx4cvgwvcma2ggopz2uvn4bgozgwr4",
  "https://ipfs.io/ipfs/bafybeicllv2zblabzqie2j6xv3kolsttjlfh32r2osmramax3wfvmc4cwe",
  "https://ipfs.io/ipfs/bafkreig3wgk6xss7kcknnmedp2ydnwpzhrdcex5wgmed6svae7u3upkxae",
  "https://ipfs.io/ipfs/bafkreicrctxmascfh2qq57wrhnd3onxvgakszdalua67nygkvlj3nkotx4"
  // Add more image URLs here

];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the delay (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className=" gradient_color h-[800px]">
    <button className=" relative z-50 my-4 ml-[830px] text-white h-16 w-64  inset-0 rounded-lg  transition duration-300 transform font-sans hover:translate-x-1 hover:scale-110 hover:translate-y-1 bg-black ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 font-bold text-2xl">
          <b className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <Link href="/">Home</Link>
          </b>
        </button>
    
    <div className="ml-[600px] text-8xl text-slate-50 font-mono">Changing Lives</div>
    <div className="overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute rounded-3xl shadow-xl shadow-black py-3 mx-[450px] duration-1000 max-w-full w-[1000px] h-[700px] ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
      
    </div>
    </div>
    </>
  );
};

export default PhotoGallery;