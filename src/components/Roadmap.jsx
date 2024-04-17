import React from "react";
import { RoadmapItem } from "./RoadmapItem";
import { ROADMAPDATA } from "../utils/constants/roadmapConstants";

export const Roadmap = () => {
  return (
    <div className="bg-gradient-to-r  from-[#030301] via-[#0E0020] to-[#000000]">
      <h2 className="text-[#ECD200] font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 font-bold uppercase  text-center">
        Roadmap
      </h2>
      {ROADMAPDATA.map((item) => (
        <RoadmapItem
          key={item.id}
          index={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </div>
  );
};
