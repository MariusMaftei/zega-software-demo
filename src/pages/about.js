import { Fragment } from "react";
import P from "../components/UI/P";
import H2 from "../components/UI/H2";
import PageSection from "../components/layout/PageSection";
import ImageTextSection from "../components/layout/ImageTextSection";
import OpportunitiesCard from "../components/cards/OpportunitiesCard";
import VideoBackground from "../components/UI/VideoBackground";
import CoreValuesCard from "../components/cards/CoreValuesCard";
import TechStackCard from "../components/cards/TechStackCard";
import { ABOUT_PAGE_DATA } from "../data/about_page_data";

export default function About() {
  return (
    <Fragment>
      <PageSection
        backgroundColor="whiteSection"
        margin="marginTopHeaderContent"
        flexDirection="column"
      >
        <P blueParagraph="blueParagraph">COFOUNDERS’ MESSAGE</P>
        {ABOUT_PAGE_DATA.coFoundersMessageData.map((data, index) => (
          <H2
            key={index}
            textAlign="centeredText"
            fontWeight500="fontWeight500"
          >
            {data}
          </H2>
        ))}
      </PageSection>
      <PageSection width="maxWidth">
        <VideoBackground
          src="https://www.zegasoftware.com/storage/pages/files/170_zegavideoc_d0b9.mp4"
          type="video/mp4"
        />
      </PageSection>
      <ImageTextSection
        src="https://www.zegasoftware.com/storage/pages/big/philosophy_aboutus_b0f8.jpg"
        alt="devImage"
      >
        <CoreValuesCard cardData={ABOUT_PAGE_DATA.philosophyCardData} />
      </ImageTextSection>

      <PageSection
        backgroundColor="blueSection"
        margin="marginTopBottom"
        justifyContent="spaceBetween"
      >
        <CoreValuesCard cardData={ABOUT_PAGE_DATA.missionCardData} />
        <CoreValuesCard cardData={ABOUT_PAGE_DATA.visionCardData} />
      </PageSection>
      <PageSection
        backgroundColor="witeSection"
        margin="marginTop"
        flexDirection="column"
      >
        <TechStackCard
          title="The Experience"
          firstDescription="Whether remote or at the HQ, our programmers never miss a day to improve on their life quality while working on global projects. We believe that by allowing them to build a dream life, they will, in return, perform better and bring added value to the company. There are four essential life aspects we help them improve:"
          customParagraphColor="blueParagraph"
        />
      </PageSection>
      <PageSection
        backgroundColor="whiteSection"
        headingText="The Experience"
        headingColor="blueBackgroundHeader"
        headingBottomBorder="blueBorder"
      >
        {ABOUT_PAGE_DATA.opportunitiesCardData.map((cardData) => (
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
