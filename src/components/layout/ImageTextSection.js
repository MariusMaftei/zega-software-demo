import React from "react";
import classes from "./ImageTextSection.module.css";

export default function ImageTextSection({ children, src, alt }) {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>{children}</div>
      <div className={classes.rightSection}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
