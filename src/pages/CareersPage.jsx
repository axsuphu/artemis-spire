import React from "react";

const CareersPage = () => {
  return (
    <main id="careers" className="relative w-screen max-w-1920">
      <div>
        <div className="bg-slate-700">
          <div className="relative isolate overflow-hidden px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div className="lg:py-50 mx-auto max-w-2xl py-20 sm:py-40">
              <div className="">
                <h1 className="text-center font-bakbak text-4xl tracking-tight text-gray-100 sm:text-6xl">
                  Join the Team!
                </h1>
                <p className="mt-14 text-center text-sm leading-8 text-white sm:text-base lg:text-lg">
                  Artemis is building a team of highly talented, creative, and
                  motivated game designers, developers, integrators, and product
                  support professionals. We are pretty particular about choosing
                  the right people to join our team.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;
