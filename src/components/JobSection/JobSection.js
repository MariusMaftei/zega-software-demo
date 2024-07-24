import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./JobSection.module.css";
import JobSectionSidebar from "./JobSectionSidebar";
import JobSectionTopbar from "./JobSectionTopbar";
import { JOB_SECTION_DATA } from "../../data/job_section_data";
import JobSectionDescription from "./JobSectionDescription";
import P from "../UI/P";

export default function JobSection() {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [filteredSidebarData, setFilteredSidebarData] = useState(
    JOB_SECTION_DATA.sideBarData
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newFilteredData = selectedTechnology
      ? JOB_SECTION_DATA.sideBarData.filter((job) =>
          job.technologies.includes(selectedTechnology)
        )
      : JOB_SECTION_DATA.sideBarData;

    setFilteredSidebarData(newFilteredData);

    const defaultJobId =
      newFilteredData.length > 0 ? newFilteredData[0].id : null;
    setSelectedJobId(defaultJobId);
  }, [selectedTechnology]);

  const handleJobSelect = (jobId) => {
    if (windowWidth < 1200) {
      navigate(`/job/${jobId}`);
    } else {
      setSelectedJobId(jobId);
    }
  };

  const handleTechnologySelect = (technology) => {
    setSelectedTechnology(technology);
  };

  const selectedJob = filteredSidebarData.find(
    (job) => job.id === selectedJobId
  );

  return (
    <div className={classes.container}>
      <P>TECHNOLOGIES</P>

      <JobSectionTopbar
        onTechnologySelect={handleTechnologySelect}
        selectedTechnology={selectedTechnology}
      />
      <div className={classes.row}>
        <div className={classes.sidebar}>
          {filteredSidebarData.map((data) => (
            <JobSectionSidebar
              key={data.id}
              job={data.job}
              type={data.type}
              employee={data.employeeNumber}
              technologies={data.technologies}
              isSelected={data.id === selectedJobId}
              onClick={() => handleJobSelect(data.id)}
            />
          ))}
        </div>
        {windowWidth >= 1200 && (
          <div className={classes.description}>
            <div className={classes.fadeArea}>
              {selectedJob && (
                <Link to={`/job/${selectedJob.id}`}>
                  View full job description
                </Link>
              )}
            </div>
            {selectedJob ? (
              <JobSectionDescription
                job={selectedJob}
                category={selectedJob.job}
                idPage={`/job/${selectedJob.id}`}
              />
            ) : (
              <div>Please select a job from the sidebar</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
