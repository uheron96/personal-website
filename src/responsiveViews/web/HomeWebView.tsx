import styled from "styled-components";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { useNavigate } from "react-router";

export const HomeWebView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />

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
  padding: 4em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
