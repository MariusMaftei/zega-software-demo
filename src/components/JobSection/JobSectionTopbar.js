import React from "react";
import classes from "./JobSectionTopbar.module.css";
import JobSectionButton from "./JobSectionButton";
import { JOB_SECTION_DATA } from "../../data/job_section_data";

export default function JobSectionTopbar({
  onTechnologySelect,
  selectedTechnology,
}) {
  const handleTechnologyClick = (technologyName) => {
    onTechnologySelect(technologyName);
  };

  return (
    <div className={classes.container}>
      {JOB_SECTION_DATA.topBarData.map((technology) => (
        <JobSectionButton
          key={technology.id}
          buttonType="techButton"
          hoverButton="hoverButton"
          isFiltered={selectedTechnology === technology.name}
          onClick={() => handleTechnologyClick(technology.name)}
        >
          {technology.name}
        </JobSectionButton>
      ))}
    </div>
  );
}
