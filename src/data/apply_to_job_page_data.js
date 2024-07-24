import { v4 as uuidv4 } from "uuid";

export const APPLY_TO_JOB_PAGE_DATA = {
  requirementsCardData: [
    {
      id: uuidv4(),
      title: "Distributed",
      subtitle: "Just be the CEO of your own life!",
      description:
        "No borders, no physical office presence required, asynchronous communications (except client calls) and obviously, 100% autonomy so you can better focus on your work.",
    },
    {
      id: uuidv4(),
      title: "Employee-Centric",
      subtitle: "What can the company do for you?",
      description:
        "We’re curious about your goals and objectives so we can help you achieve them faster. We believe that if you thrive, we’ll be thriving along.",
    },
    {
      id: uuidv4(),
      title: "Versatile",
      subtitle: "No strict rules, full accountability!",
      description:
        "We really want to make things work so we’ll be bending some rules occasionally. Internal regulations are lax, with one thing in mind - delivering only the best for the client.",
    },
  ],
  jobBenefitsData: [
    {
      id: uuidv4(),
      title: "Remote",
      description:
        "Remote is the gold standard for distributed companies. But, once in a while, gatherings with the team are helpful and we go out of our way to make it happen.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/94_vectorbenefits1_9970.svg",
    },
    {
      id: uuidv4(),
      title: "Switch projects",
      description:
        "We encourage switching between projects/teams so you can experience variety and, most important, bring out your best for our clients.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/95_vectorbenefits2_35ce.svg",
    },
    {
      id: uuidv4(),
      title: "Work at your own place",
      description:
        "Life/work balance is something everyone needs these days, and we encourage this. As long as you deliver when expected, feel free to organize your schedule.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/96_vectorbenefits3_804f.svg",
    },
    {
      id: uuidv4(),
      title: "Self-improvement",
      description:
        "Continuous learning keeps your mind in shape and helps create new opportunities. We’d be happy to facilitate the process for you!",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/97_vectorbenefits4_4a71.svg",
    },
    {
      id: uuidv4(),
      title: "Financial and insurance benefits",
      description:
        "We provide comprehensive benefits for our employees. Whether it is open vacation policy, wellness benefits, leaves or financial packages, we got you covered.",
      imageURL:
        "https://www.zegasoftware.com/storage/pages/files/98_vectorbenefits5_a7c3.svg",
    },
  ],
};
