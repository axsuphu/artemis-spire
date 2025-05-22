import React from "react";

const GameCard = ({ gameInfo }) => {
  console.log(gameInfo);

  const colors = {
    0: ["from-blue-800", "to-pink-700"],
    1: ["from-green-600", "to-orange-500"],
    2: ["from-yellow-300", "to-purple-600"],
    3: ["from-orange-400", "to-red-800"],
  };

  const max = Object.keys(colors).length;
  const randomNum = Math.floor(Math.random() * max);

  const borderColors = `${colors[randomNum][0]} ${colors[randomNum][1]}`;

  const outerWrapperStyle = `flex h-36 w-44 items-center justify-center rounded-3xl bg-gradient-to-b ${borderColors} p-0.5 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-44 sm:w-64 xl:h-52 xl:w-72 2xl:h-64 2xl:w-72`;

  return (
    // Game Card grid area
    <div className="my-3 flex items-center justify-center lg:my-4">
      {/* Game only flips in desktop */}
      <div className="group w-fit [perspective:1000px]">
        {/* Outer wrapper*/}
        <div className={outerWrapperStyle}>
          {/* Front face */}
          <div className="h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[calc(1.5rem-1px)] bg-space-black p-7">
            <div className="flex h-full flex-col justify-center">
              <div className="text-center font-bold text-white md:p-5 lg:text-xl xl:text-2xl">
                {gameInfo.title}
                <img
                  src={gameInfo.thumbnail}
                  className="mt-2 rounded-md 2xl:rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Back face */}
          <div className="absolute h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-[calc(1.5rem-1px)] bg-space-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col justify-center p-4 text-xs lg:text-base xl:p-8">
              {gameInfo.genre}
              <br />
              <br />
              {gameInfo.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
