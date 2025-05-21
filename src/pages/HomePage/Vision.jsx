import React from "react";
import Section from "../../layouts/Section";

const Vision = () => {
  return (
    <>
      <Section id="vision">
        <div className="mx-6 flex flex-col gap-5 sm:m-0 sm:w-2/3 sm:gap-8 lg:mt-16 2xl:w-3/5">
          <div className="lg:wrap 2xl:leading-0 relative z-1 place-self-start font-bakbak text-2xl leading-6 tracking-wider text-white sm:text-2xl md:text-3xl lg:flex lg:w-4/5 lg:flex-wrap 2xl:w-2/3 2xl:gap-3 2xl:text-5xl">
            <h2>SMALL COMPANY.</h2>
            <h2>GRAND IDEAS.</h2>
            <h2>MONUMENTAL SUCCESS.</h2>
          </div>
          <div className="w-4/5 place-self-end lg:w-3/4 2xl:w-3/5">
            <h3 className="relative z-1 text-right leading-5 text-grey-text sm:text-xl xl:text-2xl 2xl:text-3xl">
              Our team is fueled by creativity and is determined to reach new
              heights. Experience a new era of gaming with <b>Artemis Spire</b>!
            </h3>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Vision;
