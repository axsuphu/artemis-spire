import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../../components/NavBar/NavBarContext";
import FloatingAstronautRocks from "./FloatingAstronautRocks";

const Hero = ({ getImagePath }) => {
  const { navigation, handleNavPageClick } = useContext(NavbarContext);

  return (
    <>
      <section
        id="hero"
        className="relative mb-5 flex h-auto w-screen max-w-1920 flex-col items-center bg-hero-image bg-cover bg-no-repeat lg:mb-0 lg:h-screen lg:max-h-650 lg:flex-row lg:items-start lg:justify-center lg:pt-16 xl:pt-10 2xl:max-h-950"
      >
        <div className="mx-10 my-8 flex flex-col gap-32 font-bakbak text-white sm:mx-0 sm:my-8 sm:w-2/3 md:mx-0 md:mb-8 md:mt-14 md:w-11/12 md:gap-14 lg:absolute lg:left-32 lg:m-0 lg:w-2/3 lg:gap-24 lg:pl-4 xl:top-24 xl:w-7/12 xl:gap-28 xl:p-0 2xl:left-52 2xl:top-36 2xl:gap-36">
          <div className="relative flex flex-col font-bakbak text-3xl leading-none text-white md:text-5xl xl:text-5xl 2xl:gap-6 2xl:text-7xl">
            <h1>Next-Gen Casino Games That Keep Players Coming Back</h1>
          </div>
          <div className="flex justify-end">
            <div className="flex w-5/6 items-end">
              <h2 className="lg:w-11/22 text-md mb-2 text-right leading-none sm:text-lg md:mb-6 md:w-4/5 md:text-2xl lg:w-2/3 lg:text-left xl:w-2/3 xl:pr-4 xl:text-2xl 2xl:w-3/5 2xl:pb-6 2xl:text-3xl">
                Boost retention, maximize revenue, and trust in bulletproof
                technology, all from the leading innovator in gaming
                experiences.
              </h2>
            </div>
          </div>
        </div>
        <FloatingAstronautRocks />
      </section>
    </>
  );
};

export default Hero;
