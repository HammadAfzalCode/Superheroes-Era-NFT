import React from "react";
import { RoadmapItem } from "./RoadmapItem";
const roadmapData = [
  {
    id: 1,
    title: "Website",
    status: "Launched",
    iconPath: "/icons/website-icon.svg", // replace with actual path to your icon
  },
  {
    id: 2,
    title: "Twitter",
    status: "Launched",
    iconPath: "/icons/twitter-icon.svg",
  },
  {
    id: 3,
    title: "Discord",
    status: "Launched",
    iconPath: "/icons/discord-icon.svg",
  },
  {
    id: 4,
    title: "Screenplay",
    status: "Launched",
    iconPath: "/icons/screenplay-icon.svg",
  },
  {
    id: 5,
    title: "Join the League",
    status: "Launched",
    iconPath: "/icons/join-the-league-icon.svg",
  },
  {
    id: 6,
    title: "Digital Collectibles",
    status: "Pipeline",
    iconPath: "/icons/digital-collectibles-icon.svg",
  },
  {
    id: 7,
    title: "Behind the Scenes Access",
    status: "Pipeline",
    iconPath: "/icons/behind-the-scenes-icon.svg",
  },
  {
    id: 8,
    title: "Comic Book",
    status: "Pipeline",
    iconPath: "/icons/comic-book-icon.svg",
  },
  {
    id: 9,
    title: "Drops and Merch",
    status: "Pipeline",
    iconPath: "/icons/drops-and-merch-icon.svg",
  },
  {
    id: 10,
    title: "Expansion beyond the league",
    status: "Pipeline",
    iconPath: "/icons/expansion-icon.svg",
  },
  {
    id: 11,
    title: "Partnership",
    status: "Pipeline",
    iconPath: "/icons/partnership-icon.svg",
  },
  {
    id: 12,
    title: "Global Era Tour",
    status: "Pipeline",
    iconPath: "/icons/global-tour-icon.svg",
  },
];

export const Roadmap = () => {
  return (
    <div className="bg-gradient-to-r  from-[#030301] via-[#0E0020] to-[#000000]">
      <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 font-bold uppercase  text-center">
        Roadmap
      </h2>
      {roadmapData.map((item) => (
        <RoadmapItem
          key={item.id}
          index={item.id}
          title={item.title}
          status={item.status}
          //   iconPath={item.iconPath}
        />
      ))}
    </div>
  );
};
