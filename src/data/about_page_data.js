import { v4 as uuidv4 } from "uuid";

export const ABOUT_PAGE_DATA = {
  coFoundersMessageData: [
    "ZegaSoftware was built with a couple of things in mind. We wanted to put to good use our early IT years, which were a real blast.",
    "We also wanted to prove that we can support global powerhouses with their web development needs.",
    "Last, but not least, we’re really into building a professional community and we view Zega employees and collaborators no less than trusted partners.",
  ],
  philosophyCardData: [
    {
      id: uuidv4(),
      type: "PHILOSOPHY",
      title: "We’re giving you 100% freedom",
      description: [
        "This comes with a lot of responsibility and self-motivation. You’re a pro or on your way to becoming one - continuous learning and curiosity are not strange to you. You organise your life and your work projects flawlessly. You get out of your way to help colleagues if necessary. Communication is strong with you - this is essential for a distributed company.",
        "If you feel that you’re the CEO of your own life, then that’s true. Here’s how to do it responsibly:",
      ],
      extraDescription: [
        "Do not give work low priority. It should be first on the list;",
        "Stay in the loop with continuous learning about your field;",
        "Never bite more than you can chew;",
        "Money should be a consequence, not a goal;",
        "Respect your team and do not stop communicating effectively;",
        "Sky’s the limit.",
      ],
    },
  ],
  missionCardData: [
    {
      id: uuidv4(),
      type: "MISSION",
      title:
        "We deliver quality code for international clients, pushing the boundaries of complex projects worldwide.",
      description: [
        "We have proven work ethics and deliver only quality code while always seeking to understand the big picture of complex web development projects.",
      ],
      extraDescription: [],
    },
  ],
  visionCardData: [
    {
      id: uuidv4(),
      type: "VISION",
      title:
        "Zega envisions a future where web development has a greater influence on the end user, thus contributing to a dynamic, evolving digital civilization.",
      description: [
        "We work with multinational companies so our work has global outcomes, in the form of superior user experience and digital evolution.",
        "We also view programmers as the avant-garde of the digital revolution and make everything in our power to treat them as such.",
        "As a distributed company, we aim to excel in remote work and procedures, to make our programmers’ life better.",
      ],
      extraDescription: [],
    },
  ],
  opportunitiesCardData: [
    {
      id: uuidv4(),
      title: "Travels",
      description:
        "We encourage travels and we enable them through our full remote work policy. Anyone can travel extensively while working on the go, as long as they deliver at the agreed deadline.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/113_vectortravels_e411.svg",
    },
    {
      id: uuidv4(),
      title: "Finance",
      description:
        "Fulfilling dreams is what keeps us going, so we allow for flexible workload to make them attainable. For example, if doubling your daily quota gets you closer to a down payment, a long-awaited car or a wedding ring, we can make it happen.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/114_vectorfinance_e6cb.svg",
    },
    {
      id: uuidv4(),
      title: "Peace of mind",
      description:
        "This comes with remote work and should be a consequence of the freedom to balance your work/personal life schedule. Also, we organize special events and team buildings aimed at achieving several goals, among which peace of mind is an essential one.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/115_vectorpeacemind_ed3d.svg",
    },
    {
      id: uuidv4(),
      title: "Extended care",
      description:
        "We treat employees and partners like family, so we similarly manage these relations. Whatever problems they may encounter in their life walks, we listen and try to provide solutions, emotional, financial or otherwise.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/116_vectorfamily_ac2f.svg",
    },
  ],
};
