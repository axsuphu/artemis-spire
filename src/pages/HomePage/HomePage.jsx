import React from "react";
import {
  Hero,
  Vision,
  Features,
  CTA,
  Testimonials,
  CompanyOverview,
} from "./index";

const HomePage = () => {
  const images = {
    ellipseImage: "ellipse_darkblue.png",
  };

  const getImagePath = (imageKey) =>
    `${import.meta.env.VITE_IMAGE_PATH}/home_page/${images[imageKey]}`;

  return (
    <main id="home" className="relative max-w-1920">
      <Hero getImagePath={getImagePath} />
      <Vision />
      <Features getImagePath={getImagePath} />
      <CTA getImagePath={getImagePath} />
      <CompanyOverview getImagePath={getImagePath} />
      <Testimonials getImagePath={getImagePath} />
    </main>
  );
};

export default HomePage;
