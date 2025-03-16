import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

export const ProtfolioMobileView = () => {
  return (
    <Container>
      <Header />

      <Section
        imageSrc="/images/uliana-image.jpeg"
        id="froedtert app"
        buttonTitle="VIEW PROJECT"
        onClick={() => {}}
        paragraph="froedtert app"
      />

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
