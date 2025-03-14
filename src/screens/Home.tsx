import { Header } from "../components/Header";
import { PrimaryButton } from "../components/PrimaryButton";
import styled from "styled-components";
import { Section } from "../components/Section";
import { useRef } from "react";
import { Footer } from "../components/Footer";

export const Home = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

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
        <ProjectImage src="/images/image-homepage.jpg" alt="project image" />

        <Title>
          Hi, I'm Uliana – Experienced Full-Stack Web & Mobile Developer
        </Title>

        <ButtonContainer>
          <PrimaryButton title="ABOUT ME" onClick={scrollToAboutMe} />
        </ButtonContainer>

        <Section
          ref={aboutMeRef}
          id="about"
          imageSrc="/images/uliana-image.jpeg"
          buttonTitle="GO TO PORTFOLIO"
          onClick={() => {}}
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

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const ProjectImage = styled.img``;

const Title = styled.h1`
  font-family: var(--display-font);
  letter-spacing: -0.36px;
  font-size: clamp(2em, 5vw, 3em);
`;

const ButtonContainer = styled.div`
  width: 70%;
`;
