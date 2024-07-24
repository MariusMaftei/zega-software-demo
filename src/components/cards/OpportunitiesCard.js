import React from "react";
import classes from "./OpportunitiesCard.module.css";

export default function Opportunity({ title, description, src, alt }) {
  return (
    <div className={classes.container}>
      <div className={classes.cardText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={classes.cardImage}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
