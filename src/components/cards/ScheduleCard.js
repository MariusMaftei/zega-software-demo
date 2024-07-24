import React from "react";
import classes from "./ScheduleCard.module.css";

export default function ScheduleCard({
  title,
  subtitle,
  firstDescription,
  secondDescription,
  salary,
}) {
  return (
    <div className={classes.rootContainer}>
      <div className={classes.container}>
        <div className={classes.card}>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{firstDescription}</p>
          <p>{secondDescription}</p>
        </div>

        <p className={classes.salary}>{salary}</p>
      </div>
    </div>
  );
}
