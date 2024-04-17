import React from "react";

export const FeaturedCollectionItem = ({ path }) => {
  return (
    <div className="relative mt-6">
      <img src={path} className="w-56 h-56 xs:h-auto xs:w-56" />
    </div>
  );
};
