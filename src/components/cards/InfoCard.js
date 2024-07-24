import React from "react";
import classes from "./InfoCard.module.css";
import CarouselCard from "./CarouselCard";

export default function InfoCard({
  src,
  alt,
  buttonText,
  buttonType,
  carouselCardTitle,
  carouselCardDescription,
  imageFullWidth,
  rowReverse,
  onClick,
}) {
  return (
    <div className={`${classes.container} ${classes[rowReverse]}`}>
      <div className={`${classes.imageCard} ${classes[imageFullWidth]}`}>
        <img src={src} alt={alt} />
      </div>
      <CarouselCard
        buttonText={buttonText}
        buttonType={buttonType}
        title={carouselCardTitle}
        description={carouselCardDescription}
        onClick={onClick}
      />
    </div>
  );
}
