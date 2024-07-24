import React, { Fragment } from "react";
import Carousel from "../components/UI/Carousel";
import PageSection from "../components/layout/PageSection";
import RequirementsCard from "../components/cards/RequirementsCard";
import H2 from "../components/UI/H2";
import OpportunitiesCard from "../components/cards/OpportunitiesCard";
import JobSection from "../components/JobSection/JobSection";
import { CAROUSEL_DATA } from "../data/carousel_data";
import { APPLY_TO_JOB_PAGE_DATA } from "../data/apply_to_job_page_data";
import { useNavigate } from "react-router-dom";

export default function ApplyToJobs() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Carousel
        carouselData={CAROUSEL_DATA.applyToJobsData}
        onClick={() => navigate("/")}
      />
      <PageSection
        backgroundColor="blueSection"
        margin="marginTop"
        justifyContent="spaceBetween"
        alignItems="flexStart"
      >
        {APPLY_TO_JOB_PAGE_DATA.requirementsCardData.map((cardData) => (
          <RequirementsCard
            key={cardData.id}
            titleColor="blueFont"
            bluesSubtitle="blueParagraph"
            smallTitle={cardData.title}
            subtitle={cardData.subtitle}
            description={cardData.description}
          />
        ))}
      </PageSection>
      <PageSection
        backgroundColor="blueSection"
        headingText="We are D.E.V."
        headingColor="whiteBackgroundHeader"
        margin="marginTopBottom"
      >
        <H2 textAlign="centeredText" fontSize="smallFont" textColor="blueFont">
          If you can bring along professionalism and long term commitment, then
          we could be a good match.
        </H2>
      </PageSection>
      <PageSection backgroundColor="witeSection" margin="marginTop">
        <H2>Benefits</H2>
      </PageSection>

      <PageSection
        backgroundColor="whiteSection"
        headingText="Benefit"
        headingColor="blueBackgroundHeader"
        headingBottomBorder="blueBorder"
        width="maxWidth"
        margin="marginTop"
      >
        {APPLY_TO_JOB_PAGE_DATA.jobBenefitsData.map((cardData) => (
          <OpportunitiesCard
            key={cardData.id}
            title={cardData.title}
            description={cardData.description}
            src={cardData.imageURL}
            alt={`${cardData.title} image`}
          />
        ))}
      </PageSection>
      <PageSection backgroundColor="blueSection" margin="marginTopBottom">
        <H2 textAlign="centeredText">
          If you’re a Mid or Senior Web Programmer, we’d like to hear from you!
          Contact us here, review our benefit list or read the Zega philosophy
          before applying.
        </H2>
      </PageSection>
      <PageSection backgroundColor="witeSection" margin="marginTop">
        <H2>
          Currently hiring Mid/Senior software developers, with a variety of
          competences
        </H2>
      </PageSection>
      <PageSection
        backgroundColor="witeSection"
        margin="marginTopBottom"
        flexDirection="column"
      >
        <JobSection />
      </PageSection>
    </Fragment>
  );
}
