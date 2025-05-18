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
        className="relative mb-5 flex h-auto max-h-fit w-screen max-w-1920 flex-col items-center bg-hero-image bg-cover bg-no-repeat lg:mb-0 lg:h-screen lg:flex-row lg:items-start lg:justify-center"
      >
        <div className="mx-10 my-10 flex flex-col gap-9 font-bakbak text-white sm:my-16 2xl:left-52 2xl:mx-0 2xl:my-32 2xl:w-4/5 2xl:gap-28 2xl:tracking-widest">
          <div className="relative flex flex-col font-bakbak text-3xl text-white sm:w-7/12 md:text-5xl xl:text-5xl 2xl:w-9/12 2xl:text-7xl">
            <h1 className="">Next-Gen Casino Games That Players Want</h1>
          </div>
          <div className="flex justify-end 2xl:justify-start">
            <div className="flex w-7/12 items-end md:w-3/5 md:justify-end 2xl:w-1/2">
              <h2 className="text-md mb-2 text-right leading-none sm:text-lg md:mb-6 md:text-2xl lg:text-left xl:pr-4 xl:text-2xl 2xl:text-4xl">
                Boost retention, maximize revenue, and trust in our bulletproof
                technology.
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
