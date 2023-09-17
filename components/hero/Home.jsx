import React from "react";
import Link from "next/link";
import Typed from "react-typed";
const Home = () => {
  return (
    <div className=" gradient_color h-[1350px] pl-10">
      <div className=" gradient_color top-0 z-50 flex flex-row border-b-2">
        <p className="absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text py-8 px-10 font-mono text-4xl font-extrabold text-transparent">
          RELIEF+
        </p>
        <button className=" my-8 ml-[1380px] rounded-xl bg-purple-500 py-2 px-4  text-white">
          <b className="text-white text-xl"><Link href="/caraousal">Gallery</Link></b>
        </button>
        <button className=" my-8 ml-[50px] rounded-xl bg-purple-500 py-2 px-4  text-white">
          <b className="text-xl"><Link href="/UpComing">Upcoming Campaigns</Link></b>
        </button>
      </div>
      <div>
        <div className=" mt-32 ml-28 w-[1060px] text-[100px]">
          <b className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Empower
          </b>{" "}
          <Typed
            className="pl-2 text-xl font-bold text-white sm:text-4xl md:pl-4 md:text-[100px]"
            strings={["Lives", "Minds", "People"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <div className="my-2 ml-28 w-[1000px] text-[100px]">
          <b className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Change
          </b>
          <b className=" text-white"> Humanity</b>
        </div>
        <div>
          <button className="my-8 ml-[120px] rounded-lg text-xl bg-purple-500 py-2 px-4  text-white"><Link href="https://explorer.solana.com/address/8mzNi8nBQuLL7HaDunEFx9BumjybJv8ZKdNYuDKe1rdd?cluster=devnet">View Transaction History</Link></button>
        </div>
        <div>
          <img
            className=" absolute -mt-[490px] ml-[1200px] h-[500px] w-[500px] mix-blend-lighten"
            src="https://storage.googleapis.com/pai-images/8dd4acd5b1174966a79bc2d0e5763b55.jpeg"
            alt=""
          />
        </div>
      </div>
      <div>
        <button className=" ease relative inset-0 z-50 mt-[160px] ml-[750px] h-16  w-64 transform  rounded-lg bg-black font-mono text-2xl font-bold text-white opacity-80 transition duration-300 hover:translate-x-1 hover:translate-y-1 hover:scale-110 group-hover:translate-x-0 group-hover:translate-y-0">
          <b className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           <Link href="#campaign"> Explore Campaigns</Link>
          </b>
        </button>
      </div>
    </div>
  );
};

export default Home;
