import { v4 as uuidv4 } from "uuid";

export const HIRE_DEVELOPER_PAGE_DATA = {
  hireDeveloperCardData: [
    {
      id: uuidv4(),
      imgURL:
        "https://www.zegasoftware.com/storage/pages/files/150_vectorexpdev_f4d1.svg",
      title: "Hire experienced developers at competitive rates!",
      description:
        "Our developers have accessible rates when compared to some small firms or costly individual contractors.",
    },
    {
      id: uuidv4(),
      imgURL:
        "https://www.zegasoftware.com/storage/pages/files/151_vectorskills_3e64.svg",
      title: "Choose from dozens of skills and technologies available!",
      description:
        "Whether frontend or backend, our teams can provide a wide range of software skills and technologies to best suit the needs of your projects.",
    },
    {
      id: uuidv4(),
      imgURL:
        "https://www.zegasoftware.com/storage/pages/files/152_vectorzerorisk_1c5e.svg",
      title: "Zero risk hiring!",
      description:
        "If, for whatever reasons, the first two weeks of collaboration do not work as expected, you do not have to pay anything, according to the contract in place.",
    },
  ],
  developerProfileCardData: [
    {
      id: uuidv4(),
      description:
        "We recommend individuals with the most appropriate experience for your needs, based on our screening and previous experiences.",
      imgURL:
        "https://www.zegasoftware.com/storage/pages/files/154_vectortest1_dfb2.svg",
    },
    {
      id: uuidv4(),
      description:
        "Our individuals or teams have significant previous experience in their field. Plus, we screen for individuals that have a knack for continuous learning, just to make sure they constantly update on new technological advances.",
      imgURL:
        "https://www.zegasoftware.com/storage/pages/files/155_vectortest2_2f21.svg",
    },
  ],
  requirementsCardData: [
    {
      id: uuidv4(),
      cardNumber: "01",
      title: "Requirements",
      description:
        "Give us a list of skills or introduce your project so we know what you are looking for.",
    },
    {
      id: uuidv4(),
      cardNumber: "02",
      title: "Screening",
      description:
        "We compile a list of competent individuals with the most suited skills and background most.",
    },
    {
      id: uuidv4(),
      cardNumber: "03",
      title: "Interviews",
      description: "Meet and select the developers of your liking.",
    },
    {
      id: uuidv4(),
      cardNumber: "04",
      title: "Trial",
      description:
        "Start working with the selected candidates and take advantage of the two weeks risk-free trial.",
    },
  ],
};
