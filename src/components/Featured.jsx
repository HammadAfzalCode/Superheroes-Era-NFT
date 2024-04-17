import React from "react";
import { FeaturedCard } from "./FeaturedCard";
import JoinTheLeagueCard from "./JoinTheLeague";

export const Featured = () => {
  const sectionStyle = {
    background:
      "linear-gradient(180deg, #0E0020 0%, #010001 51%, #0D001E 100%)",
  };

  return (
    <div
      style={sectionStyle}
      className="text-yellow-400 pt-60  py-10 px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div class=" p-2">
        <h2 class="text-white font-bold text-center text-3xl ">
          DIGITAL COLLECTIBLES
          <span class="block h-1 bg-red-600 xs:w-[75%] sm:w-[50%] md:w-[30%] lg:w-[20%] xl:w-[15%] mx-auto mt-1 mb-2"></span>
        </h2>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-center">
        Welcome to the Next League of Digital Collectibles.
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center text-white">
        Imagine owning superhero IP before it made headlines. We're at the
        starting line of a digital IP innovation race, and a few fortunate early
        adopters are about to pilot the next wave of superhero market adoption.
        Rising to champion this movement is Superheroine Era.
      </p>
      <FeaturedCard />
      <JoinTheLeagueCard />
    </div>
  );
};
