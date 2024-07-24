import React from "react";
import classes from "./DeveloperHireCard.module.css";

export default function DeveloperHireCard({
  src,
  alt,
  title,
  description,
  rowReverse,
}) {
  return (
    <div className={`${classes.container} ${classes[rowReverse]}`}>
      <div className={classes.cardImage}>
        <img src={src} alt={alt} />
      </div>
      <div className={classes.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
