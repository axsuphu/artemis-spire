import React from "react";

const ErrorPage = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col items-center py-5 sm:py-8 lg:py-10">
        <h1 className="text-center font-bakbak text-3xl font-bold tracking-widest text-black sm:text-3xl lg:text-4xl">
          OOPS!
        </h1>
        <p className="m-8 text-center text-sm leading-6 text-black md:text-base md:leading-8">
          Something went wrong. Try clicking the refresh page button to reload
          the application.{" "}
        </p>
        <button
          className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={resetErrorBoundary}
        >
          Refresh page
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
