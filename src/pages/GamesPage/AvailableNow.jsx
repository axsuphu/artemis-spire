import React from "react";
import Section from "../../layouts/Section";

const AvailableNow = ({ list }) => {
  const iconsWithPages = list.map((game, index) => {
    const navigateTo = useNavigate();
    const handleGameButtonClick = () => {
      navigateTo(`/games/${game.abbreviation}`);
    };
    const folder = game.abbreviation;
    const imageLocation = `${
      import.meta.env.VITE_IMAGE_PATH
    }/game_images/${folder}/${game.icon_image}`;

    return (
      <li key={index}>
        <div className="group [perspective:1000px]">
          <div className="flex h-80 w-72 items-center justify-center rounded-3xl bg-gradient-to-b from-blue-800 to-pink-700 p-0.5 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[calc(1.5rem-1px)] bg-space-black p-7">
              <div className="flex h-full flex-col justify-center">
                <LazyLoad
                  key={index}
                  height={176}
                  offset={100}
                  placeholder={<LoadingImage />}
                >
                  <img
                    src={imageLocation}
                    className="h-auto w-full object-contain"
                  />
                </LazyLoad>
                <span className="m-4 text-center text-xl font-bold text-white">
                  {game.name}
                </span>
              </div>
            </div>
            <div className="absolute h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-[calc(1.5rem-1px)] bg-space-black text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="flex h-full flex-col justify-center">
                <p>Some text her eblah and fighs oudkfj eithe from it to</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <Section id="available_now">
      <div className="flex justify-center py-8 xl:pb-20">
        <ul
          role="list"
          className="grid gap-4 px-8 sm:grid-cols-2 sm:gap-2 sm:px-2 md:gap-8 md:px-12 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 2xl:gap-12"
        >
          {iconsWithPages}
        </ul>
      </div>
    </Section>
  );
};

export default AvailableNow;
