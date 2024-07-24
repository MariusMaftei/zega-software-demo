import React from "react";
import classes from "./VideoBackground.module.css";

export default function VideoBackground({ src, type }) {
  return (
    <div className={classes.container}>
      <video autoPlay loop muted>
        <source src={src} type={type} />
      </video>
    </div>
  );
}
