import React from "react";

const JoinTheLeagueCard = () => {
  return (
    <div className="mt-10 flex flex-col">
      <div class=" p-2">
        <h2 class="text-white text-md font-bold text-center">
          Community Perks
          <span class="block h-1 bg-red-600 xs:w-[40%] sm:w-[20%] md:w-[20%] lg:w-[10%] xl:w-[15%] mx-auto mt-1 mb-2"></span>
        </h2>
      </div>
      <h2 className=" text-[#ECD200] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-center">
        Join the League
      </h2>
      <img
        src="src\assets\LandPage.png"
        className="sm:max-w-4xl sm:max-h-4xl xs:max-w-56 xs:max-h-56 self-center"
      />
      <p className="text-white self-center mt-8 xs:text-sm">
        A new soceity and group of enthusiasts awaits you. Join us in a new Era.
        <br className="xs:hidden sm:block"></br>
        Sign-up for our newsletter to gain insider access and exclusive products
      </p>
      <div className="mx-auto mt-4">
        {" "}
        <button className=" bg-[#060C03] xs:text-sm text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default JoinTheLeagueCard;
