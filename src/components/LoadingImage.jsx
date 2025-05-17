import React from "react";

const LoadingImage = () => {
  return (
    <div className="flex h-[176px] w-64 items-center justify-center bg-gray-300">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-400 border-t-blue-800"></div>
    </div>
  );
};

export default LoadingImage;
