import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./ApplyForJobCard.module.css";
import JobSectionButton from "../JobSection/JobSectionButton";
import Button from "../UI/Button";
import H2 from "../UI/H2";

export default function ApplyForJobCard({ jobData, idPage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const jobId = location.pathname.split("/job/")[1];
  const buttonText = jobId ? `Apply as ${jobData.title}` : "Apply Now";

  const handleClick = () => {
    if (!jobId) {
      navigate(idPage);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <H2 textAlign="left">{jobData.title}</H2>
        <Button buttonType="standardButton" onClick={handleClick}>
          {buttonText}
        </Button>
      </div>
      <div className={classes.column}>
        <div className={classes.row}>
          <div className={classes.contentRow}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-industry.svg"
              alt="compIcon"
            />
            <p>Industry: Technology</p>
          </div>
          <div className={classes.contentRow}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-pin.svg"
              alt="locationIcon"
            />
            <p>{jobData.location}</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.contentRow}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-people.svg"
              alt="peopleIcon"
            />
            <p>Company size: {jobData.companySize}</p>
          </div>
          <div className={classes.contentRow}>
            <img
              src="https://www.zegasoftware.com/files/vector/ico-calendar.svg"
              alt="calendarIcon"
            />
            <p>{jobData.calendar}</p>
          </div>
        </div>
        <div className={classes.buttonRow}>
          {jobData.technologiesButtonText.map((tech, index) => (
            <JobSectionButton key={index}>{tech}</JobSectionButton>
          ))}
        </div>
      </div>
    </div>
  );
}
