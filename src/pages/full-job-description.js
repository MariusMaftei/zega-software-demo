import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { JOB_SECTION_DATA } from "../data/job_section_data";
import OpportunitiesCard from "../components/cards/OpportunitiesCard";
import PageSection from "../components/layout/PageSection";
import JobSectionDescription from "../components/JobSection/JobSectionDescription";
import { SINGLE_PAGE_DATA } from "../data/single_page_data";
import H2 from "../components/UI/H2";

export default function JobDetailPage() {
  const { jobId } = useParams();
  const jobData = JOB_SECTION_DATA.sideBarData.find((job) => job.id === jobId);
  if (!jobData) {
    return <div>Job not found</div>;
  }

  return (
    <Fragment>
      <PageSection
        backgroundColor="whiteSection"
        margin="marginTopBottom"
        justifyContent="justifyContentStart"
      >
        <JobSectionDescription category={jobData.job} />
      </PageSection>
      <PageSection backgroundColor="blueSection" margin="marginTopBottom">
        <H2>Why join Zega?</H2>
      </PageSection>
      <PageSection
        backgroundColor="blueSection"
        headingText="Why join Zega?"
        headingColor="whiteBackgroundHeader"
      >
        {SINGLE_PAGE_DATA.opportunitiesCardData.map((cardData) => (
          <OpportunitiesCard
            key={cardData.id}
            title={cardData.title}
            description={cardData.description}
            src={cardData.imageURL}
            alt={`${cardData.title}.image`}
          />
        ))}
      </PageSection>
    </Fragment>
  );
}
