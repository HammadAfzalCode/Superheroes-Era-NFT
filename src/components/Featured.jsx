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
        <h2 class="text-white font-bold text-center text-md lg:mt-6 ">
          DIGITAL COLLECTIBLES
          <span class="block h-1 bg-red-600 xs:w-[50%] sm:w-[30%] md:w-[20%] lg:w-[10%] xl:w-[15%] mx-auto mt-1 mb-2"></span>
        </h2>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-center">
        Welcome to the Next<br className="xs:hiddrn"></br> League of Digital
        <br className="xs:hiddrn"></br> Collectibles.
      </h2>
      <p className="text-sm xs:text-sm sm:text-base md:text-lg text-center text-white">
        Imagine owning superhero IP before it made
        <br className="xs:hiddrn"></br> headlines. We're at the starting line of
        a digital IP <br className="xs:hiddrn"></br> innovation race, and a few
        fortunate early<br className="xs:hiddrn"></br>
        adopters are about to pilot the next wave of{" "}
        <br className="xs:hiddrn"></br> superhero market adoption. Rising to
        champion<br className="xs:hiddrn"></br> this movement is Superheroine
        Era.
      </p>
      <FeaturedCard />
      <JoinTheLeagueCard />
    </div>
  );
};
