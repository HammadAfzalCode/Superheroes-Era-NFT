import React from "react";

const Banner = () => {
  return (
    <div className="relative   text-white flex justify-center items-center overflow-none ">
      <div className="w-full xs:w-[60%] sm:w-[60%] flex flex-col  items-center justify-center p-4">
        <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#ECD200] lg:text-3xl xs:text-md sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-center">
          Digital Collectibles For<br></br> The Creator Economy
        </h1>
        <p
          style={{ fontFamily: "Orbitron", fontWeight: "medium" }}
          className="my-4 xs:text-base lg:text-lg text-center"
        >
          Discover Superheroine Erza, join The League and gain prime<br></br>{" "}
          access to exclusive information and giveaways.
        </p>
        <button className="bg-[#ECD200] text-black px-6 py-2 border border-black   rounded-full hover:bg--600 transition duration-300 ease-in-out">
          Let's Explore
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-2">
        <div className=" p-2 rounded-full">
          <img
            src="src\assets\twitter-new-2023-x-logo-white-background-vector_1017-45422.avif"
            alt="X Logo"
            className="h-8 w-8"
          />
        </div>

        <div className=" p-2 rounded-xl">
          <img
            src="src\assets\636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
            alt="Icon 1"
            className="h-8 w-8"
          />
        </div>
        <div className="p-2 rounded-full">
          <img src="src\assets\images.png" alt="Icon 2" className="h-8 w-8" />
        </div>

        <div className="p-2 rounded-full">
          <img
            src="src\assets\headphone-icon-png-free-vector.jpg"
            alt="Icon 2"
            className="h-8 w-8"
          />
        </div>
      </div>
      <div className="absolute top-[120%] left-[60%]">
        <img
          src="src\assets\Group 35832.png"
          className="sm:max-w-60 sm:max-h-60 xs:max-w-30 xs:max-h-40 md:max-w-80 md:max-h-80"
        />
      </div>
      <div className="absolute top-[100%] ">
        <img
          src="src\assets\Group 35831.png"
          className="sm:max-w-60 sm:max-h-60 xs:max-w-30 xs:max-h-40 md:max-w-80 md:max-h-80"
        />
      </div>
      <div className="absolute top-[120%] right-[60%]">
        <img
          src="src\assets\Group 35833.png"
          className="sm:max-w-60 sm:max-h-60 xs:max-w-30 xs:max-h-40 md:max-w-80 md:max-h-80"
        />
      </div>
    </div>
  );
};

export default Banner;
