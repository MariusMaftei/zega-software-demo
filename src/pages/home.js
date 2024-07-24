import React, { Fragment } from "react";
import Carousel from "../components/UI/Carousel";
import InfoBar from "../components/UI/InfoBar";
import PageSection from "../components/layout/PageSection";
import InfoCard from "../components/cards/InfoCard";
import TechStackCard from "../components/cards/TechStackCard";
import IconBar from "../components/UI/IconBar";
import { CAROUSEL_DATA } from "../data/carousel_data";
import { INFO_BAR_DATA } from "../data/info_bar_data";
import { HOME_PAGE_DATA } from "../data/home_page_data";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const navigationHandler = (buttonText) => {
    if (buttonText === "Apply for jobs!") navigate("/apply-to-jobs");
    if (buttonText === "Yes! I would like to hire developers")
      navigate("/hire-developers");
  };

  return (
    <Fragment>
      <Carousel
        carouselData={CAROUSEL_DATA.homePageData}
        onClick={(buttonText) => navigationHandler(buttonText)}
      />
      <InfoBar data={INFO_BAR_DATA.homePage} />

      <PageSection
        backgroundColor="whiteSection"
        headingText="Hire developers"
        headingColor="blueBackgroundHeader"
        margin="marginTopBottom"
        flexDirection="column"
      >
        {HOME_PAGE_DATA.infoCardData.map((cardData, index) => (
          <InfoCard
            key={cardData.id}
            carouselCardTitle={cardData.title}
            carouselCardDescription={cardData.description}
            src={cardData.imageURL}
            alt={`${cardData.title}.image`}
            buttonText={cardData.buttonText}
            buttonType={cardData.buttonType}
            rowReverse={index === 1 ? "rowReverse" : ""}
          />
        ))}
      </PageSection>

      <PageSection
        backgroundColor="blueSection"
        margin="marginTop"
        flexDirection="column"
      >
        <TechStackCard
          title="Tech stack"
          firstDescription="Our technology stack is diverse and meticulously curated, integrating the latest innovations to ensure optimal performance and results. We recognize that certain specialized technologies may be absent from your in-house team or challenging to secure promptly in the talent market."
          customParagraphColor="blueParagraph"
        />
      </PageSection>

      <PageSection
        backgroundColor="blueSection"
        margin="marginTop"
        flexDirection="flexWrap"
      >
        <IconBar cardData={HOME_PAGE_DATA.iconBar} />
      </PageSection>
    </Fragment>
  );
}
