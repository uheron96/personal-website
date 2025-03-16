type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  narrowImage: string;
  buttonTitle: string;
  buttonAction: () => void;
};

export const projectsData: Project[] = [
  {
    title: "Froedtert&MCW App",
    imageUrl: "/images/froedtert-pages.png",
    narrowImage: "/images/froedtert-narrow.png",
    id: "froedtert-app",
    description:
      "I have been working on this mobile app since 2021, building it from the ground up. The app is built with React Native and TypeScript for the front end, and TypeScript for the back end. It is available on both Android and iOS. This app serves as a health hub for Froedtert & MCW Hospital, providing essential services to over 15,000 monthly active users.",
    buttonAction: () =>
      window.open(
        "https://links.froedtert.care/download",
        "_blank",
        "noreferrer"
      ),
    buttonTitle: "DOWNLOAD APP",
  },
];
