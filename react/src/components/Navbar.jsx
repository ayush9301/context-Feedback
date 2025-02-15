import React from "react";
import img from "../assets/feedback.png"
function Navbar() {
  return (
    <div className="  flex w-full  text-[2em] items-center  justify-center bg-black  text-black justify-around h-[3.5rem]">
   <div className="w-[40%] flex flex-row justify-around">
   <img src={img} alt="My Example"  className="w-[2.5rem] h-[2.5rem] mt-[0.3rem]"/>
      <h1 className=" font-sans text-white ">
       
        FeedBack-app<span className="text-[2rem]">...</span>
      </h1>
   </div>
    </div>
  );
}

export default Navbar;
