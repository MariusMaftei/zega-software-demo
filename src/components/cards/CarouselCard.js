import React from "react";
import classes from "./CarouselCard.module.css";
import Button from "../UI/Button";
import H2 from "../UI/H2";

export default function CarouselCard({
  title,
  description,
  secondDescription,
  buttonText,
  buttonType,
  onClick,
}) {
  return (
    <div className={classes.container}>
      <H2>{title}</H2>
      <p>{description}</p>
      {secondDescription && (
        <p className={classes.description}>{secondDescription}</p>
      )}
      {buttonText && (
        <Button onClick={onClick} buttonType={buttonType}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
