import React from "react";
import Section from "../../layouts/Section";

const RevenueStats = ({ getImagePath }) => {
  return (
    <>
      <img
        src={getImagePath("ellipseImage")}
        className="absolute left-0 top-72 z-0 xl:top-1/2 2xl:top-96"
      />
      <Section id="revenue-stats">
        <div className="bg-transparent md:py-20 lg:py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 text-center lg:grid-cols-3">
              <div className="mx-auto flex h-fit max-w-xs flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-6 md:max-w-md">
                <img src={getImagePath("moneyBag")} className="w-1/2" />
                <p className="pb-2 text-base text-grey-text">
                  <span className="text-xl font-extrabold text-green-primary">
                    +18% average increase
                  </span>{" "}
                  in slot machine revenue after switching to our games.
                </p>
              </div>
              <div className="mx-auto flex h-fit max-w-xs flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-6 md:max-w-md">
                <img src={getImagePath("coinGrowth")} className="w-1/2" />

                <p className="pb-2 text-base text-grey-text">
                  <span className="text-xl font-extrabold text-pink-500">
                    92% operator retention
                  </span>{" "}
                  rate over the past 3 years!
                </p>
              </div>
              <div className="mx-auto flex h-fit max-w-xs flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-6 md:max-w-md">
                <img src={getImagePath("hourglass")} className="w-1/2" />

                <p className="pb-2 text-base text-grey-text">
                  <span className="text-xl font-extrabold text-purple-primary">
                    99.98% uptime
                  </span>{" "}
                  across our gaming console network even after 2 years on the
                  floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default RevenueStats;
