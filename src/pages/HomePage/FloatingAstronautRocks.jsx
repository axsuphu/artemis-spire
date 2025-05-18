import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingAstronautRocks = () => {
  const [fastPosition, setFastPosition] = useState(0); // To track the position of the fast rock
  const [slowPosition, setSlowPosition] = useState(0); // Slow rock position
  const [slowestPosition, setSlowestPosition] = useState(0); // Slowest rock position

  const radiusX = 360; // Horizontal radius
  const radiusY = 200; // Vertical radius
  const centerX = 200; // Center X of ellipse
  const centerY = 30; // Center Y of ellipse

  const slowestradiusX = 250; // Horizontal radius

  const images = {
    astronaut: "astronaut_reaching_xl.png",
    rock1: "rock_1.png",
    rock2: "rock_2.png",
    rock3: "rock_3.png",
  };

  //Calculate and set positions of rocks once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setFastPosition((prev) => (prev + 0.3) % 360); // Increment position
      setSlowPosition((prev) => (prev + 0.2) % 360); // Increment position for slow rock
      setSlowestPosition((prev) => (prev + 0.1) % 360); // Increment position for slow rock
    }, 30); // Update every 30ms for smoother animation

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  //Image path
  const getImagePath = (imageKey) =>
    `${import.meta.env.VITE_IMAGE_PATH}/home_page/${images[imageKey]}`;

  // Calculate rock's position based on angle
  const fastX = centerX + radiusX * Math.cos((fastPosition * Math.PI) / 180);
  const fastY = centerY + radiusY * Math.sin((fastPosition * Math.PI) / 180);

  const slowX = centerX + radiusX * Math.cos((slowPosition * Math.PI) / 180);
  const slowY = centerY + radiusY * Math.sin((slowPosition * Math.PI) / 180);

  const slowestX =
    centerX + slowestradiusX * Math.cos((slowestPosition * Math.PI) / 180);
  const slowestY =
    centerY + radiusY * Math.sin((slowestPosition * Math.PI) / 180);

  // Calculate tilt for the rock based on fastPosition
  const rockTilt = fastPosition;

  return (
    <div className="absolute 2xl:right-20 2xl:top-0">
      <div className="relative">
        <motion.img
          src={getImagePath("astronaut")}
          alt="Floating Astronaut Reaching"
          className="container relative"
          style={{ zIndex: 10 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <div>
          <div className="absolute 2xl:bottom-10">
            {/* Rock 1 */}
            <motion.img
              className=""
              src={getImagePath("rock1")}
              alt="Floating Rock"
              style={{
                transform: `translate(${fastX}px, ${fastY}px) rotate(${rockTilt}deg)`,
                opacity: 1,
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div>
          <div className="absolute 2xl:top-24">
            {/* Rock 2 */}
            <motion.img
              className=""
              src={getImagePath("rock2")}
              alt="Floating Coin Pusher"
              style={{
                transform: `translate(${slowestX}px, ${slowestY}px) rotate(${rockTilt}deg)`,
                opacity: 1,
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div>
          <div className="absolute -left-96 2xl:top-56">
            {/* Rock 3 */}
            <motion.img
              className=""
              src={getImagePath("rock3")}
              alt="Floating Coin Pusher"
              style={{
                transform: `translate(${slowX}px, ${slowY}px) rotate(${rockTilt}deg)`,
                opacity: 1,
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div>
          <div className="absolute -left-[110%] top-72">
            {/* Rock 1 */}
            <motion.img
              className=""
              src={getImagePath("rock1")}
              alt="Floating Rock"
              style={{
                transform: `translate(${slowestX}px, ${slowestY}px) rotate(${rockTilt}deg)`,
                opacity: 1,
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingAstronautRocks;
