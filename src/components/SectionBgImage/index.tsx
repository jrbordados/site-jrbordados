import React from "react";

import bgImg from "@/assets/space-backgroud.jpg";

export const SectionBgImage: React.FC = () => {
  return (
    <>
      <div className="h-24" />
      <div
        className="h-[300px] bg-no-repeat bg-fixed bg-top bg-cover sm:h-[500px]"
        style={{
          backgroundImage: `url('${bgImg?.src}')`,
        }}
      />
      <div className="h-[300px]" />
    </>
  );
};
