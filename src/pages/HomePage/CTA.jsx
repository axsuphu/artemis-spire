import React from "react";
import Section from "../../layouts/Section";

const CTA = ({ getImagePath }) => {
  const imageLocation = `${
    import.meta.env.VITE_IMAGE_PATH
  }/home_page/astronaut_nohelmet.png`;

  return (
    <>
      <Section id="cta">
        <div className="mx-auto max-w-5xl">
          <div className="relative isolate flex flex-col overflow-hidden rounded-md bg-pink-500 px-6 pt-12 shadow-2xl sm:gap-4 sm:rounded-xl sm:p-0 sm:px-16 md:gap-16 md:py-20 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:px-24">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 z-0 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:-translate-y-24"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#fff" />
                  <stop offset="1" stopolor="#fff" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
              <h2 className="font-bakbak text-xl text-white md:text-4xl xl:text-5xl">
                Speak to an Artemis Spire Rep!
                <br />
                (888) 888-8888
              </h2>

              <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Email
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="z-2 flex h-80 items-center justify-center md:h-96">
              <img src={imageLocation} className="w-2/5" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CTA;
