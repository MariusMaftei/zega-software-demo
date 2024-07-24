import React, { Fragment } from "react";
import PageSection from "../components/layout/PageSection";
import Carousel from "../components/UI/Carousel";
import DeveloperHireCard from "../components/cards/DeveloperHireCard";
import DeveloperProfileCard from "../components/cards/DeveloperProfileCard";
import H2 from "../components/UI/H2";
import RequirementCard from "../components/cards/RequirementsCard";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { CAROUSEL_DATA } from "../data/carousel_data";
import { INFO_BAR_DATA } from "../data/info_bar_data";
import InfoBar from "../components/UI/InfoBar";
import { HIRE_DEVELOPER_PAGE_DATA } from "../data/hire_developer_page_data";

export default function HireDevelopers() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Carousel
        carouselData={CAROUSEL_DATA.hireDevelopersPageData}
        onClick={() => navigate("/hire-developers-team")}
      />
      <InfoBar data={INFO_BAR_DATA.hireDevelopersPage} />
      <PageSection
        backgroundColor="whiteSection"
        headingText="Hire Developers"
        headingColor="blueBackgroundHeader"
        flexDirection="column"
        margin="marginTopBottom"
      >
        {HIRE_DEVELOPER_PAGE_DATA.hireDeveloperCardData.map((card, index) => (
          <DeveloperHireCard
            key={card.id}
            src={card.imgURL}
            alt={`${card.title} img`}
            title={card.title}
            description={card.description}
            rowReverse={index % 2 === 1 ? "rowReverse" : ""}
          />
        ))}
      </PageSection>
      <PageSection backgroundColor="blueSection" margin="marginTop">
        <H2 textAlign="centeredText">
          Our developers have been selected through rigorous internal testing
          and can provide top references from previous projects
        </H2>
      </PageSection>
      <PageSection
        backgroundColor="blueSection"
        headingText="Rigorous testing"
        headingColor="whiteBackgroundHeader"
        headingBottomBorder="whiteBorder"
        margin="marginTop"
        justifyContent="spaceBetween"
      >
        {HIRE_DEVELOPER_PAGE_DATA.developerProfileCardData.map(
          (profile, index) => (
            <DeveloperProfileCard
              key={profile.id}
              src={profile.imgURL}
              alt={`devImg${index + 1}`}
              description={profile.description}
              imageMargin={index === 0 ? "imageMargin" : ""}
              imageZIndex={index === 1 ? "positive" : ""}
            />
          )
        )}
      </PageSection>
      <PageSection backgroundColor="whiteSection" margin="marginTopBottom">
        <H2 textAlign="centeredText">
          You also might hire people with various skills on a very short notice,
          as we have available collaborators on stand by.
        </H2>
      </PageSection>
      <PageSection backgroundColor="blueSection" margin="marginTop">
        <H2 textAlign="centeredText">
          A neat selection process that will help you hire in a few days,
          depending on your specific needs
        </H2>
      </PageSection>
      <PageSection backgroundColor="blueSection" margin="marginTop">
        {HIRE_DEVELOPER_PAGE_DATA.requirementsCardData.map((cardData) => (
          <RequirementCard
            key={cardData.id}
            titleColor="blueFont"
            subtitleFontWeight="fontWeight700"
            title={cardData.cardNumber}
            subtitle={cardData.title}
            description={cardData.description}
          />
        ))}
      </PageSection>
      <PageSection
        backgroundColor="blueSection"
        headingText="Selection"
        headingColor="whiteBackgroundHeader"
        margin="marginTopBottom"
      >
        <Link to="/hire-developers-team">
          <Button buttonType="standardButton">
            Hire a team of developers now!
          </Button>
        </Link>
      </PageSection>
    </Fragment>
  );
}
