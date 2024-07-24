import React from "react";
import classes from "./JobSectionDescription.module.css";
import JobSectionList from "./JobSectionList";
import { JOB_SECTION_DATA } from "../../data/job_section_data";
import ApplyForJobCard from "../cards/ApplyForJobCard";

export default function JobSectionDescription({ category, idPage }) {
  let jobData = null;

  switch (category) {
    case "Database Developer":
      jobData = JOB_SECTION_DATA.databaseDeveloperData[0];
      break;
    case "React Native Developer":
      jobData = JOB_SECTION_DATA.reactNativeDeveloperData[0];
      break;
    case ".NET & Angular Web Developer":
      jobData = JOB_SECTION_DATA.netAngularWebDeveloperData[0];
      break;
    case "Senior .NET Developer":
      jobData = JOB_SECTION_DATA.seniorNETDeveloperData[0];
      break;
    case "Medium Java Developer":
      jobData = JOB_SECTION_DATA.mediumJavaDeveloperData[0];
      break;
    case "Senior Java Developer":
      jobData = JOB_SECTION_DATA.seniorJavaDeveloperData[0];
      break;
    case "ReactJS Developer":
      jobData = JOB_SECTION_DATA.reactJSDeveloperData[0];
      break;
    case "Full-Stack Developer":
      jobData = JOB_SECTION_DATA.fullStackDeveloperData[0];
      break;
    default:
      return <div>Please select a job from the sidebar</div>;
  }

  if (!jobData) {
    return <div>No data found for this job category</div>;
  }

  const sections = [
    { title: "Technology Stack", items: jobData.technologyStack },
    { title: "Responsibilities", items: jobData.responsibilitiesDescription },
    { title: "Requirements", items: jobData.requirementsDetails },
    { title: "Benefits", items: jobData.responsibilitiesDescription },
  ];

  return (
    <div className={classes.container}>
      <ApplyForJobCard
        jobData={jobData}
        buttonText={sections.items}
        idPage={idPage}
      />
      <div className={classes.contentRow}>
        <span></span>
      </div>
      <div className={classes.column}>
        <div className={classes.colum}>
          {sections.map((section, index) => (
            <JobSectionList
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
