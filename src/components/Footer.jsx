import React from "react";
import FooterDetailes from "./FooterDetails";

export const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(0deg, #0E0020 0%, #000000 100%)",
      }}
    >
      <div className="flex sm:flex-row xs:flex-col container bg-gray-800 w-3/4 mx-auto rounded-lg h-auto ">
        <img
          src="src\assets\Group 35839.png"
          className="md:w-56 sm:w-40 h-auto"
        />
        <div className="flex flex-col">
          <h2 className=" relative  text-[#ECD200] text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 font-bold uppercase  text-center">
            JOIN OUR <br></br> COMMUNITY FOR <br></br> INSIDER ACCESS
          </h2>
          <button className=" mt-6 mx-auto left-[40%]  bg-[#060C03] xs:text-sm   text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
            View More
          </button>
        </div>
        <img
          src="src\assets\Group 35839.png"
          className="md:w-56 sm:w-40 h-auto"
        />
      </div>
      <FooterDetailes />
    </div>
  );
};
