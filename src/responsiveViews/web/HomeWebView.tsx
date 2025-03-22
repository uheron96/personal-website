import styled from "styled-components";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { useNavigate } from "react-router";
import { ProjectsPreview } from "../../components/ProjectsPreview";

export const HomeWebView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header isWeb />

      <Inner>
        <Section
          id="about"
          imageSrc="/images/uliana-image.jpeg"
          buttonTitle="GO TO PORTFOLIO"
          title="Hi, I'm Uliana – Experienced Web & Mobile Developer"
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

        <PreviewContainer>
          <ProjectsPreview />
        </PreviewContainer>
      </Inner>

      <Footer isWeb />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 0 auto 2em;
  padding: 4em 4em 0em;
  max-width: 1440px;
  box-sizing: border-box;
  width: 100%;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 70%;
  padding-top: 4em;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 4em;
`;
