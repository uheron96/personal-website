import { useRef } from "react";
import { Header } from "./components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Text } from "../../components/Text";
import { ProjectsPreview } from "../../components/ProjectsPreview";

export const HomeMobileView = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();

  const scrollToAboutMe = () => {
    const { current } = aboutMeRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Header />

      <Inner>
        <Section
          id="about"
          title="Hi, I'm Uliana – Experienced Web & Mobile Developer"
          imageSrc="/images/uliana-image.jpeg"
          buttonTitle="GO TO PORTFOLIO"
          onClick={() => navigate("/portfolio")}
          paragraph="I am a skilled software engineer with over 5 years of 
          experience building full-stack mobile and web applications for the 
          tech and healthcare industries. I have expertise in both front-end 
          and back-end technologies, including React.js, React Native, CSS, 
          HTML, TypeScript, AWS, and RESTful APIs. I am passionate about 
          making impactful contributions, leading teams and projects, and 
          continuously pushing boundaries, all while prioritizing the delivery 
          of outstanding value to users and teams alike."
        />
      </Inner>

      <PreviewContainer>
        <ProjectsPreview isMobile/>
      </PreviewContainer>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  position: relative;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
`;
