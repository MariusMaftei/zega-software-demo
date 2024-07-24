import React from "react";
import classes from "./TechStackCard.module.css";
import H2 from "../UI/H2";

export default function TechStackCard({
  title,
  firstDescription,
  secondDescription,
  customParagraphColor,
}) {
  return (
    <div className={classes.container}>
      <H2>{title}</H2>
      <p className={classes[customParagraphColor]}>{firstDescription}</p>
      {secondDescription && (
        <p className={classes[customParagraphColor]}>{secondDescription}</p>
      )}
    </div>
  );
}
