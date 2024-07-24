import React from "react";
import classes from "./InfoBar.module.css";
import Wrapper from "./Wrapper";

export default function EvaluationDashboard({ data }) {
  return (
    <div className={classes.rootContainer}>
      <Wrapper>
        {data.map((data, index) => (
          <div key={index} className={classes.container}>
            <p>{data.title}</p>
            <h3>{data.subTitle}</h3>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
