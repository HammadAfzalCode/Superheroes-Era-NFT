import React from "react";

import Navbar1 from "./Navbar1";
import Main from "./Main";

export const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen overflow-none ">
      <img
        src="src\assets\Group 35830.png"
        className="absolute w-screen h-screen object-cover"
      />

      <Navbar1 />
      <Main />
    </div>
  );
};
