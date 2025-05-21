import React from "react";
import NeonTitle from "../components/NeonTitle";

const CareersPage = () => {
  return (
    <main id="careers" className="relative w-screen max-w-1920">
      <NeonTitle title="JOIN THE TEAM" color="purple" />

      <div className="flex justify-center">
        <div className="m-5 flex w-2/3 flex-col rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill p-10 text-center text-white shadow-2xl">
          <p className="sm:text-base lg:text-lg">
            Artemis is building a team of highly talented, creative, and
            motivated game designers, developers, integrators, and product
            support professionals. We are pretty particular about choosing the
            right people to join our team.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            Apply Now
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;
