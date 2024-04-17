import React from "react";
import { FeaturedCollectionItem } from "./FeaturedCollectionItem";

const imgPath = [
  {
    id: 1,
    img_path: "src/assets/Group 35709.png",
  },
  {
    id: 2,
    img_path: "src/assets/Group 35706.png",
  },
  {
    id: 3,
    img_path: "src/assets/Group 35710.png",
  },
  {
    id: 4,
    img_path: "src/assets/Group 35707.png",
  },
  {
    id: 5,
    img_path: "src/assets/Group 35708.png",
  },
];

export const FeaturedCollection = () => {
  return (
    <div className="">
      <div className="">
        <img
          src="src/assets/Group 35841.png"
          className="absolute w-screen h-screen object-cover"
        />
        <h2 className="relative pt-10 text-[#ECD200] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
          Featured Collection
        </h2>
      </div>

      <div className="flex items-center mx-auto w-[80%]">
        {imgPath.map((path) => (
          <FeaturedCollectionItem key={path.id} path={path.img_path} />
        ))}
      </div>
      <button className=" mt-6 relative left-[40%]  sm:w-[15%]  bg-[#060C03] xs:text-sm   text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
        View More
      </button>
    </div>
  );
};
