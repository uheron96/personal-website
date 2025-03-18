import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "../../components/ProjectsFooter";

export const ProjectWebView = () => {
  const { id } = useParams();
  const currentProject = projectsData.find((proj) => proj.id === id);

  if (!currentProject) return <></>;

  return (
    <Container>
      <Header />
      <ImageContainer>
        <PreviewImage src={currentProject.narrowImage} />
      </ImageContainer>
      <Inner>
        <InfoLeft>
          <Section
            id={currentProject.id}
            title={currentProject.title}
            paragraph={currentProject.description}
            skillsDesciption={currentProject.skills}
            buttonTitle={currentProject.buttonTitle}
            onClick={currentProject.buttonAction}
          />
        </InfoLeft>
        <InfoRight>
          <Subtitle>Project Background</Subtitle>
          <Paragraph>{currentProject.backgroundDescription}</Paragraph>
          <Subtitle>Preview</Subtitle>
          <PreviewImage src={currentProject.previewImage1Url} />
          <PreviewImage src={currentProject.previewImage2Url} />
        </InfoRight>
      </Inner>

      {currentProject.nextProject ||
        (currentProject.prevProject && (
          <ProjectsFooterContainer>
            <ProjectsFooter
              nextProjectId={currentProject.nextProject}
              prevProjectId={currentProject.prevProject}
            />
          </ProjectsFooterContainer>
        ))}

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0em 4em;
  gap: 4em;
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: -2em;
  gap: 1.5em;
`;

const ImageContainer = styled.div`
  margin: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PreviewImage = styled.img`
  width: 90%;
  border-radius: 8px;
`;

const Subtitle = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;

const ProjectsFooterContainer = styled.div`
  padding: 2em 4em;
`;

const Paragraph = styled.p`
  font-family: var(--body-font);
  font-size: clamp(1em, 2vh, 3em);
  line-height: 2;
  line-height: 1.8;
  color: var(--gray-dark-blue);
`;
