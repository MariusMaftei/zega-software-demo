import React from "react";
import classes from "./DeveloperProfileCard.module.css";

export default function DeveloperProfileCard({
  description,
  src,
  alt,
  imageMargin,
  imageZIndex,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.cardText}>
        <p>{description}</p>
      </div>
      <div
        className={`${classes.cardImage} ${classes[imageMargin]} ${classes[imageZIndex]}`}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
