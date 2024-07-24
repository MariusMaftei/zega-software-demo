import React from "react";
import classes from "./H2.module.css";

export default function H2({
  children,
  textAlign,
  fontSize,
  textColor,
  fontWeight500,
}) {
  return (
    <h2
      className={`${classes.heading} ${textAlign ? classes[textAlign] : ""} ${
        fontSize ? classes[fontSize] : ""
      } ${fontWeight500 ? classes.fontWeight500 : ""} ${
        textColor ? classes[textColor] : ""
      }`}
    >
      {children}
    </h2>
  );
}
