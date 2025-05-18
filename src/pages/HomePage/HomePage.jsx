import React from "react";
import {
  Hero,
  Vision,
  RevenueStats,
  CTA,
  Testimonials,
  CompanyOverview,
} from "./index";

const HomePage = () => {
  const images = {
    ellipseImage: "ellipse_darkblue.png",
    hourglass: "hourglass.png",
    moneyBag: "money_bag.png",
    coinGrowth: "coin_growth.png",
    teamwork: "teamwork.png",
  };

  const getImagePath = (imageKey) =>
    `${import.meta.env.VITE_IMAGE_PATH}/home_page/${images[imageKey]}`;

  return (
    <main id="home" className="relative max-w-1920">
      <Hero getImagePath={getImagePath} />
      <Vision />
      <RevenueStats getImagePath={getImagePath} />
      <CTA getImagePath={getImagePath} />
      <CompanyOverview getImagePath={getImagePath} />
      <Testimonials getImagePath={getImagePath} />
    </main>
  );
};

export default HomePage;
