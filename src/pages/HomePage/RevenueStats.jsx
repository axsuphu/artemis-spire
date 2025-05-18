import React from "react";
import Section from "../../layouts/Section";

const RevenueStats = ({ getImagePath }) => {
  return (
    <>
      <img
        src={getImagePath("ellipseImage")}
        className="absolute left-0 top-1/2 z-0 2xl:top-96"
      />
      <Section id="revenue-stats">
        <div className="bg-transparent py-10 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex h-80 max-w-xs flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-6 md:max-w-md">
                <img src={getImagePath("moneyBag")} className="w-1/2" />
                <p className="text-base leading-7 text-grey-text">
                  <span className="text-xl font-extrabold text-green-primary">
                    +18% average increase
                  </span>{" "}
                  in slot machine revenue after switching to our games.
                </p>
              </div>
              <div className="mx-auto flex h-80 max-w-xs flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-6 md:max-w-md 2xl:items-center">
                <img src={getImagePath("coinGrowth")} className="w-1/2" />

                <p className="text-base leading-7 text-grey-text">
                  <span className="text-xl font-extrabold text-pink-500">
                    92% operator retention
                  </span>{" "}
                  rate over the past 3 years!
                </p>
              </div>
              <div className="bo rder-2 mx-auto flex h-80 max-w-xs flex-col items-center justify-center gap-4 rounded-3xl border-solid border-zinc-500 border-opacity-5 bg-dark-fill px-5 py-12 md:max-w-md">
                <img src={getImagePath("hourglass")} className="w-1/2" />

                <p className="text-base leading-7 text-grey-text">
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
