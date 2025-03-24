type Project = {
  id: string;
  title: string;
  subtitle: string;
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
  themeColor: string;
};

export const projectsData: Project[] = [
  {
    title: "Here Health",
    subtitle: "Froedtert & MCW",
    imageUrl: "/images/here-health/here-health-main.png",
    narrowImage: "/images/here-health/here-health-header.png",
    id: "here-health-app",
    themeColor: "E4F4F0",
    backgroundDescription:
      "As lead developer for Here Health, I engineered HIPAA-compliant virtual care solutions including integration with Zendesk SDK, 98.6 SDK and Okta for user authentication. Using React Native and Typescript for frontend interfaces, I created intuitive dashboards for visit scheduling, payment history tracking, and family account management, complemented by RESTful backend APIs that integrated with MyChart EHR systems and processed payments via Stripe. The platform's multi-user architecture supports family health plan customization, as well as dingle and duo options. Key UI elements like dynamic billing summaries, error-resistant payment flows, and real-time 'Start a Visit' functionality demonstrate the full-stack implementation. Launched to 15.000+ active users, the solution maintains great patient satisfaction through 24/7 telehealth access and personalized profile management.",
    description:
      "HIPAA-compliant telehealth system enabling 24/7 care access. Built with React Native, Stripe and TypeScript, the platform features patient enrollment flow, sign-up payment processing, and real-time telehealth capabilities.",
    buttonAction: () =>
      window.open(
        "https://links.froedtert.care/download",
        "_blank",
        "noreferrer"
      ),
    buttonTitle: "DOWNLOAD APP",
    skills:
      "React Native, TypeScript, 98.6 SDK, Zendesk SDK, Kotlin, Swift, RESTful APIs, AWS: Lambda, Quicksight",
    previewImage1Url: "/images/here-health/here-health-preview-1.png",
    previewImage2Url: "/images/here-health/here-health-preview-2.png",
    prevProject: "preventive-app",
    nextProject: "appointments-app",
  },
  {
    title: "Appointments",
    subtitle: "Froedtert & MCW",
    imageUrl: "/images/appointments/appointments-main.png",
    narrowImage: "/images/appointments/appointments-header.png",
    id: "appointments-app",
    backgroundDescription:
      "As a developer for Froedtert's patient scheduling ecosystem, I created a full-stack solution unifying virtual and in-person care coordination. The React Native based interface enables patients to manage appointments through dynamic cards showing provider details, visit types (virtual/in-person), and PreCheck-in requirements, while backend TypeScript services sync with Epic EHR systems and handle live appointment data. Key features include integration with MyChart SDK to view all relevant Epic data and Zoom SDK for one-on-one virtual visit for scheduled virtual appointments with any specialist. The dashboard's 'Upcoming Appointments' module reduces cognitive load through color-coded status indicators and one-tap virtual visit joining, while the auto-reminder system decreases missed appointments. Security-focused implementation includes HIPAA-compliant Zoom integration and role-based access controls for family/caregiver account linkages.",
    themeColor: "#E6F0FF",
    description:
      "Designed a unified appointment preview system featuring real-time visit data integration, PreCheck-in workflows, and virtual Zoom visits. This feature enabled users to connect with providers via seamless in-app Zoom Meetings integration.",
    buttonAction: () =>
      window.open(
        "https://links.froedtert.care/download",
        "_blank",
        "noreferrer"
      ),
    buttonTitle: "DOWNLOAD APP",
    skills:
      "React Native, Zoom SDK, TypeScript, Protobuf, MyChart SDK, RESTful APIs, AWS: Lambda, Quicksight",
    previewImage1Url: "/images/appointments/appointments-preview-1.png",
    previewImage2Url: "/images/appointments/appointments-preview-2.png",
    prevProject: "here-health-app",
    nextProject: "preventive-app",
  },
  {
    title: "Preventive Care",
    subtitle: "Froedtert & MCW",
    imageUrl: "/images/preventive-care/preventive-care-main.png",
    narrowImage: "/images/preventive-care/preventive-care-header.png",
    id: "preventive-app",
    backgroundDescription:
      "As a lead for Froedtert's preventive care ecosystem, I designed a React Native based health monitoring system that analyzes biometric trends like blood pressure history and delivers personalized risk assessments using science-backed algorithm. The platform features dynamic health dashboards showing systolic/diastolic trends against clinical benchmarks, coupled with contextual education modules explaining hypertension thresholds and prevention strategies. Key components include a rules engine encouraging patients to schedule a visit for crisis-level readings (>180/120 mmHg) and integration with the GetWell Loop intervention program through secure API endpoints. The frontend's 'Healthy Heart/Mind/You' navigation enables patients to access tailored prevention plans, mental health tools, and vaccine tracking.",
    themeColor: "#F7EBDA",
    description:
      "Developed a patient education platform integrating EHR biometrics data (blood pressure/health maintenance), risk stratification algorithms, and preventive care workflows. Built with React Native and RESTful APIs, it highlights health gaps to patients and encourages them to stay up to date with their preventive care.",
    buttonAction: () =>
      window.open(
        "https://links.froedtert.care/download",
        "_blank",
        "noreferrer"
      ),
    buttonTitle: "DOWNLOAD APP",
    skills: "React Native, TypeScript, Protobuf, AWS: Lambda",
    previewImage1Url: "/images/preventive-care/preventive-care-preview-1.png",
    previewImage2Url: "/images/preventive-care/preventive-care-preview-2.png",
    prevProject: "appointments-app",
    nextProject: "here-health-app",
  },
];
