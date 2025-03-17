type Project = {
  id: string;
  title: string;
  description: string;
  backgroundDescription: string;
  imageUrl: string;
  narrowImage: string;
  buttonTitle: string;
  buttonAction: () => void;
  skills: string;
  previewImage1Url: string;
  previewImage2Url: string;
  prevProject?: string;
  nextProject?: string;
};

export const projectsData: Project[] = [
  {
    title: "Froedtert&MCW App",
    imageUrl: "/images/froedtert-app/froedtert-pages.png",
    narrowImage: "/images/froedtert-app/froedtert-narrow-image.png",
    id: "froedtert-app",
    backgroundDescription: "tbd",
    description:
      "I have been working on this mobile app since 2021, building it from the ground up. The app is built with React Native and TypeScript for the front end, and TypeScript for the back end. It is available on both Android and iOS. This app serves as a health hub for Froedtert & MCW Hospital, providing essential services to over 15,000 monthly active users.",
    buttonAction: () =>
      window.open(
        "https://links.froedtert.care/download",
        "_blank",
        "noreferrer"
      ),
    buttonTitle: "DOWNLOAD APP",
    skills:
      "React Native, TypeScript, Protobuf, MyChart, SDKs, Kotlin, Swift, RESTful APIs, Storybook, AWS: Pinpoint, Lambda, Quicksight",
    previewImage1Url: "/images/froedtert-app/froedtert-preview.png",
    previewImage2Url: "/images/froedtert-app/froedtert-preview-2.png",
    prevProject: undefined,
    nextProject: undefined,
  },
];
