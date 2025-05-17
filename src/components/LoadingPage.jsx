import React from "react";

const LoadingPage = () => {
  return (
    <section className="flex h-96 flex-col items-center justify-center bg-transparent text-center">
      <div className="m-auto max-w-7xl sm:px-8 sm:py-10 lg:px-10">
        <div className="justify-left bg-slate-600 px-8 py-6 shadow-2xl sm:rounded-3xl sm:px-10 lg:px-24 lg:pb-12 lg:pt-10">
          <h1 className="font-heading mb-6 text-center text-3xl font-bold tracking-widest text-white sm:text-3xl lg:mb-10 lg:text-4xl">
            Loading Page...
          </h1>
          <p>Please give us a few moments</p>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
