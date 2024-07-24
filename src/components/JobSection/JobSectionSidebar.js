import React from "react";
import classes from "./JobSectionSidebar.module.css";
import JobSectionButton from "./JobSectionButton";

export default function JobSectionSidebar({
  technologies,
  job,
  type,
  employee,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`${classes.container} ${
        isSelected ? classes.selectedContainer : ""
      }`}
      onClick={onClick}
    >
      <div className={classes.card}>
        <h4>{job}</h4>
        <div className={classes.cardTable}>
          <div className={classes.cardText}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-industry.svg"
              alt=""
            />
            <p>{type}</p>
          </div>
          <div className={classes.cardText}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-people.svg"
              alt=""
            />
            <p>{employee}</p>
          </div>
        </div>
        <div className={classes.cardButtons}>
          {technologies.map((tech, index) => (
            <JobSectionButton key={index}>{tech}</JobSectionButton>
          ))}
        </div>
      </div>
    </div>
  );
}
