import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { projectsData } from "../../data/projects";
import { useNavigate } from "react-router";

export const ProtfolioMobileView = () => {
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
  padding: 2em;
`;
