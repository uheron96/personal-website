import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { projectsData } from "../../data/projects";
import { useNavigate } from "react-router";
import { Text } from "../../components/Text";

export const ProtfolioMobileView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Inner>
        {projectsData.map((project) => (
          <ProjectContainer>
            <ImageWrapper>
              <ProjectImage src={project.imageUrl} />
            </ImageWrapper>

            <Text type="Title">{project.title}</Text>
            <Section
              id={project.id}
              buttonTitle="VIEW PROJECT"
              imageSrc={project.imageUrl}
              onClick={() => navigate(`/project/${project.id}`)}
              paragraph={project.description}
            />
          </ProjectContainer>
        ))}
      </Inner>

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  padding: 2em;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0em;
  gap: 1em;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: scale(1.3);
`;
