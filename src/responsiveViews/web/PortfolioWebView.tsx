import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styled from "styled-components";
import { projectsData } from "../../data/projects";
import { Section } from "./components/Section";
import { useNavigate } from "react-router";

export const PortfolioWebView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />

      <Inner>
        {projectsData.map((project) => (
          <Section
            id={project.id}
            buttonTitle="VIEW PROJECT"
            imageSrc={project.imageUrl}
            onClick={() => navigate(`/project/${project.id}`)}
            paragraph={project.description}
            title={project.title}
            extraSpacing
          />
        ))}
      </Inner>

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 4em 6em;
`;
