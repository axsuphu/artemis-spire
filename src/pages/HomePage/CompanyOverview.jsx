import React from "react";
import Section from "../../layouts/Section";

const CompanyOverview = ({ getImagePath }) => {
  // const imageLocation = `${
  //   import.meta.env.VITE_IMAGE_PATH
  // }/home_page/coin_machine.jpg`;

  return (
    <>
      <Section id="company_overview">
        <div className="m-4 flex flex-col gap-8 rounded-lg bg-dark-fill p-4 py-5 contain-paint sm:px-8 sm:py-10 md:my-14 md:max-w-xl lg:mx-10 lg:max-w-4xl lg:flex-row lg:px-10 xl:max-w-7xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/4 top-1/2 z-0 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="#7449B8" fillOpacity="1" />
          </svg>
          <div className="mx-auto flex flex-col items-center">
            <h2 className="relative text-center font-bakbak text-3xl tracking-wide text-white md:text-4xl lg:max-w-lg lg:text-5xl xl:max-w-2xl xl:text-6xl">
              Fresh Ideas, Exciting Approach - Choose Us!
            </h2>
            <div className="relative mt-10 grid grid-cols-1 items-center justify-center lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <img src={getImagePath("teamwork")} className="w-1/2" />
              </div>

              <div className="m-2 rounded-sm bg-dark-fill p-2 text-base shadow-lg 2xl:rounded-lg 2xl:p-10 2xl:text-lg">
                <p className="text-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CompanyOverview;
