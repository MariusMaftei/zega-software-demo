import React, { Fragment } from "react";
import classes from "./IconBar.module.css";

export default function IconBar({ cardData }) {
  return (
    <div className={classes.container}>
      {cardData.map((data, index) => (
        <div key={index} className={classes.card}>
          <img src={data} alt={`image.${index}`} />
        </div>
      ))}
    </div>
  );
}
