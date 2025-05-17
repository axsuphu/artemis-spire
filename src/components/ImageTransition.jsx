import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/**
 * @component An image will transition as user scrolls pass the element. Once it is visible, it will not transition again
 * @param {1} src source of img element
 * @param {2} alt alt of img element
 * @param {3} width width of img element
 * @param {4} height height of img element
 * @param {5} className contains tailwind styling
 * @param {6} axis x or y axis
 * @param {7} shiftDirection left, right, top, bottom
 * @param {8} shiftPx  amount to shift from point of origin
 * @returns an image element with custom transitions and styling
 */

const ImageTransition = ({
  src,
  alt,
  width,
  height,
  className,
  axis,
  shiftDirection,
  shiftPx,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, //Only trigger once
    threshold: 0.5, //10% of the image visible
  });

  //Styling for image element
  const classNameValue =
    className +
    ` transition-transform duration-1000 ease-out ${
      isVisible
        ? `translate-` + `${axis}` + `-0 opacity-100`
        : `translate-` + `${axis}` + `-${shiftPx} opacity-0`
    }`;

  const translateAxis = `translate` + axis.toUpperCase();
  function translateCalc(shiftDirection, shiftPx) {
    switch (shiftDirection) {
      case "left-to-right":
      case "top-to-bottom":
        return `-${shiftPx}`;
      case "right-to-left":
      case "bottom-to-top":
        return `${shiftPx}`;
      default:
        return "0";
    }
  }

  //Transition for image element
  const translateDirection = translateCalc(shiftDirection, shiftPx);

  //When the image comes into view, set isVisible to true
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]); //Run this effect when `inView` changes

  return (
    <img
      ref={ref}
      src={isVisible ? src : ""}
      alt={alt}
      width={width}
      height={height}
      className={classNameValue}
      style={{
        transform: isVisible
          ? `${translateAxis}` + `(0)`
          : `${translateAxis}` + `(${translateDirection}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default ImageTransition;
