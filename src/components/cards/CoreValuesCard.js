import React from "react";
import classes from "./CoreValuesCard.module.css";
import P from "../UI/P";
import H2 from "../UI/H2";

export default function CoreValuesCard({ cardData }) {
  return (
    <div className={classes.container}>
      {cardData.map((card) => (
        <div key={card.id} className={classes.card}>
          <P blueParagraph="blueParagraph" fontWeight500="fontWeight500">
            {card.type}
          </P>
          <H2>{card.title}</H2>
          {card.description.map((desc, index) => (
            <P marginBottom=" marginBottom" key={index}>
              {desc}
            </P>
          ))}
          {card.extraDescription && card.extraDescription.length > 0 && (
            <div>
              {card.extraDescription.map((extraDesc, extraDescIndex) => (
                <P
                  key={extraDescIndex}
                  blueParagraph="blueParagraph"
                  fontWeight500="fontWeight500"
                  marginBottom=" marginBottom"
                >
                  {extraDesc}
                </P>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
