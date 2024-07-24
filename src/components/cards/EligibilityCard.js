import React from "react";
import classes from "./EligibilityCard.module.css";
import H2 from "../UI/H2";
import P from "../UI/P";

export default function EligibilityCard({
  cardNumber,
  highlightText,
  description,
  src,
  alt,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <H2 textColor="blueFont"> {cardNumber}</H2>
        <P>
          <b>
            <u>{highlightText}</u>
          </b>
          {description}
        </P>
      </div>
      <div>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
