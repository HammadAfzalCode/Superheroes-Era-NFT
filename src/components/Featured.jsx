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
      className="text-[#ECD200] pt-60  py-10 px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div class=" p-2">
        <h4 class="text-white font-bold text-center text-lg lg:mt-6 mt-8">
          DIGITAL COLLECTIBLES
          <span class="block h-1 bg-red-600 w-1/2 xs:w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/10 xl:w-3/20 mx-auto mt-1 mb-2"></span>
        </h4>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-center">
        Welcome to the Next
        <br className="hidden xs:block" /> League of Digital
        <br className="hidden xs:block" /> Collectibles.
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center text-white">
        Imagine owning superhero IP before it made
        <br className="hidden sm:block" /> headlines. We're at the starting line
        of a digital IP <br className="hidden sm:block" /> innovation race, and
        a few fortunate early <br className="hidden sm:block" />
        adopters are about to pilot the next wave of{" "}
        <br className="hidden sm:block" /> superhero market adoption. Rising to
        champion <br className="hidden sm:block" /> this movement is
        Superheroine Era.
      </p>

      <FeaturedCard />
      <JoinTheLeagueCard />
    </div>
  );
};
