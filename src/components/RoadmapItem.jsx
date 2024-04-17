import React from "react";

export const RoadmapItem = ({ index, title, status }) => {
  return (
    <div>
      <div className=" flex justify-between w-[85%] mx-auto bg-gray-800 rounded-lg mt-2 p-2 ">
        <div className="flex items-center gap-2">
          <div>
            <h3
              className=" text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-center"
              style={{ fontFamily: "Orbitron", opacity: 1 }}
            >
              {index < 10 ? `0${index}` : index}
            </h3>
          </div>
          <div className="ml-4 xs:ml-2">
            <span className="font-medium text-yellow-400 ">{title}</span>
          </div>
        </div>

        <div>
          {status === "Launched" ? (
            <button className="text-black font-bold bg-yellow-500 p-4 rounded-lg">
              {status} <i className="fas fa-check"></i>
            </button>
          ) : (
            <button className="text-black font-bold border border-yellow-500 p-4 rounded-lg px-8">
              {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
