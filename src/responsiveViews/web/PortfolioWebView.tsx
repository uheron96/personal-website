import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styled from "styled-components";
import { projectsData } from "../../data/projects";
import { Section } from "./components/Section";
import { useNavigate } from "react-router";

export const PortfolioWebView = () => {
  const navigate = useNavigate();
  let i = 0;

  return (
    <Container>
      <Header />

      <Inner>
        {projectsData.map((project) => {
          i++;
          return (
            <Section
              wideImage
              reverseLayout={!!(i % 2)}
              id={project.id}
              buttonTitle="VIEW PROJECT"
              imageSrc={project.imageUrl}
              onClick={() => navigate(`/project/${project.id}`)}
              paragraph={project.description}
              title={project.title}
            />
          );
        })}
      </Inner>

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding: 4em;
`;
