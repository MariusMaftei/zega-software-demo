import { v4 as uuidv4 } from "uuid";

export const SINGLE_PAGE_DATA = {
  opportunitiesCardData: [
    {
      id: uuidv4(),
      title: "Self Development",
      description:
        "At ZegaSoftware, you will have access to resources and mentors that can help you grow as a software expert and as a person. ",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/167_vectorextra1_d8cd.svg",
    },
    {
      id: uuidv4(),
      title: "Career Growth",
      description:
        "Rapid growth through our courses and a variety of projects that will put your skills to the test. ",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/168_vectorextra2_6841.svg",
    },
    {
      id: uuidv4(),
      title: "Tight-knit Community",
      description:
        "Be a part of a tight-knit community of experienced engineers and humans that will lend a hand whenever you're in need.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/169_vectorextra3_c240.svg",
    },
  ],
};
