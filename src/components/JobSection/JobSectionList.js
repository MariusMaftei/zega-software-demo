import React from "react";
import classes from "./JobSectionList.module.css";

export default function JobSectionList({ title, items }) {
  return (
    <div className={classes.container}>
      <div className={classes.listTitle}>
        <h3>
          <strong>{title}</strong>
        </h3>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
