"use client";
import { TypeAnimation } from "react-type-animation";
import VideoComp from "./video/video";

const Hero = () => {
  return (
   <div className="relative">
    <div className="">
      <VideoComp />
    </div>
    <div className="absolute top-0 h-full  w-full text-center flex flex-col items-center justify-center bg-primary/10 text-white">
      <div className="border-4 bg-black py-16 px-8 md:uppercase opacity-50">
    <h1 className="md:text-4xl text-2xl uppercase text-yellow-300 ">
      <TypeAnimation 
        sequence={[
          "Welcome to Foodie Resturant!",
          2000,
          "Bon appétit!",
          2000
        ]}
        repeat={Infinity}
      />
      </h1>
      <p className="md:text-2xl text-sm ">Indulge in a culinary journey with our food app <br/> where every bite is a savory adventure waiting to be discovered. <br/>Welcome to a world of flavors, convenience, and delightful dining experiences at your fingertips.</p>
      </div>
    </div>
   </div>
  );
};

export default Hero;
