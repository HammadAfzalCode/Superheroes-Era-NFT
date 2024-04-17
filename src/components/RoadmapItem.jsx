import React from "react";

export const RoadmapItem = ({ index, title, status }) => {
  return (
    <div>
      <div className=" flex justify-between w-[85%] mx-auto bg-gray-800 rounded-lg mt-2 p-2 ">
        <div className="flex items-center gap-2">
          <div>
            <h3
              className="text-white font-sans  text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-center"
              style={{
                opacity: 1,
                fontSize: "48px",
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "black",
                textFillColor: "transparent",
                textStrokeWidth: "2px",
                textStrokeColor: "black",
              }}
            >
              {index < 10 ? `0${index}` : index}
            </h3>
          </div>
          <div className="ml-4 xs:ml-2">
            <span className="font-medium text-[#ECD200] ">{title}</span>
          </div>
        </div>

        <div>
          {status === "Launched" ? (
            <button className="text-black font-bold bg-[#ECD200] p-4 rounded-lg">
              {status} <i className="fas fa-check"></i>
            </button>
          ) : (
            <button className="text-white font-bold border border-[#ECD200] p-4 rounded-lg px-8">
              {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
