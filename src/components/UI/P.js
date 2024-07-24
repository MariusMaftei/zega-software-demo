import React from "react";
import classes from "./P.module.css";

export default function P({
  children,
  blueParagraph,
  fontWeight700,
  marginBottom,
}) {
  return (
    <p
      className={`${classes.paragraph} ${
        blueParagraph ? classes.blueParagraph : ""
      } 
      ${fontWeight700 ? classes.fontWeight700 : ""} 
      ${marginBottom ? classes.marginBottom : ""}`}
    >
      {children}
    </p>
  );
}
