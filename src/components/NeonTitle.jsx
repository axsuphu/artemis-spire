import React from "react";
import Section from "../layouts/Section";

const NeonTitle = ({ title, color }) => {
  const colors = {
    pink: "bg-pink-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  const titlColor = colors[color];
  const style = `absolute inset-0 h-full w-full rounded-lg ${titlColor} opacity-35 blur-xl md:blur-2xl`;
  return (
    <Section id="games_title">
      <div className="relative flex h-14 w-64 items-center justify-center md:h-24 md:w-72 lg:h-28 xl:h-32 xl:w-80">
        <span className={style}></span>
        <h1 className="relative z-10 text-4xl font-bold text-white shadow-sm md:text-5xl xl:text-6xl">
          {title}
        </h1>
      </div>
    </Section>
  );
};

export default NeonTitle;
