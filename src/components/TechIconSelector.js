import React, { useState } from "react";
import classes from "./TechIconSelector.module.css";
import H2 from "../components/UI/H2";
import P from "../components/UI/P";

export default function TechIconSelector({
  data,
  selectedTech,
  setSelectedTech,
}) {
  const selectTechnologyHandler = (index, technology) => {
    setSelectedTech((prevSelectedTech) => {
      if (index === 0) {
        return [technology];
      } else {
        if (prevSelectedTech.includes(technology)) {
          return prevSelectedTech.filter((tech) => tech !== technology);
        } else {
          const updatedSelectedTech = prevSelectedTech.filter(
            (tech) => tech !== data[0].technology
          );
          return [...updatedSelectedTech, technology];
        }
      }
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.cardTitle}>
        <H2 fontSize="smallFont">Find developers to hire</H2>
        <P>Select at least one skill</P>
      </div>
      {data.map((techData, index) => (
        <div
          key={index}
          className={`${classes.card} ${
            selectedTech.includes(techData.technology) ? classes.activeCard : ""
          }`}
          onClick={() => selectTechnologyHandler(index, techData.technology)}
        >
          <img src={techData.imgURL} alt={`${techData.technology}.image`} />
          <span>{techData.technology}</span>
        </div>
      ))}
    </div>
  );
}
