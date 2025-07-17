import React from "react";
import img from "../assets/feedback.png"
function Navbar() {
  return (
    <div className="  flex text-xl w-full h-auto py-4 sm:text-2xl md:text-3xl items-center  justify-center bg-black  text-black justify-around h-[3.5rem]">
   <div className="w-[100%]  h-auto flex flex-row justify-around md:w-[60%]">
      <h1 className=" flex flex-row gap-4 font-sans text-white ">
   <img src={img} alt="My Example"  className="w-[2.5rem] h-[2.5rem] mt-[0.3rem]"/>

       
        FeedBack-app<span className="text-[2rem]">...</span>
      </h1>
   </div>
    </div>
  );
}

export default Navbar;
