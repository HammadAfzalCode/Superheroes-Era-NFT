import React from "react";

export const FeaturedCard = () => {
  return (
    <div className="bg-gray-800 mt-20 container mx-auto max-w-[80%] overflow-none rounded rounded-lg flex sm:flex-row xs:flex-col">
      <img
        src="src\assets\Group 35831@2x.png"
        className="sm:h-80 sm:w-60 xs:h-40 xs:w-60 xs:mx-auto  sm:my-auto"
      />
      <div className="bg-gray-800  p-8">
        <h2 className="sm:text-3xl xs:text-2xl font-bold mb-4 text-[#ECD200]">
          SUPERHEROINE ERA
        </h2>
        <h3 className="text-2xl mb-4 text-[#ECD200]">ABOUT US</h3>
        <p className="mb-6 text-white xs:text-xs text-sm">
          Superheroine Era is a digital collectibles project that aims to design
          a new society of superheroes. Launching with an evocative 3-act,
          54-scene screenplay and otherworld based on the digital collectibles,
          with each of the 54-scenes evolving into its own unique comic and
          character storylines. Traverse this world with us, co-create and
          enrich the expansive universe.
        </p>
        <h3 className="text-2xl mb-4 text-[#ECD200]">TO OUR HOLDERS:</h3>
        <p className="mb-6 text-white xs:text-xs text-sm">
          Brace yourselves for what's coming. It's going to be legendary! Our
          mission is to foster ownership and engagement within our web-3 brand
          by bridging the gap between our community and the web-2 world,
          creating a space where members can participate through incentives and
          mechanics without compromising the integrity of their NFTs.
        </p>
        <p className="mb-6 text-white">
          Join us on
          <a href="#" className="underline text-[#ECD200]">
            Discord
          </a>{" "}
          &{" "}
          <a href="#" className="underline text-[#ECD200]">
            Twitter
          </a>
        </p>
        <div className="mx-auto">
          <button className=" mx-auto bg-[#060C03] xs:text-sm item-center  text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};
