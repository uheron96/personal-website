import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "./components/ProjectsFooter";

export const ProjectMobileView = () => {
  const { id } = useParams();
  const currentProject = projectsData.find((proj) => proj.id === id);

  if (!currentProject) return <></>;

  return (
    <Container>
      <Header />
      <Inner>
        <Section
          id={currentProject?.id}
          buttonTitle={currentProject.buttonTitle}
          imageSrc={currentProject?.narrowImage}
          narrowImage
          onClick={currentProject.buttonAction}
          paragraph={currentProject.description}
          title={currentProject?.title}
          skillsDesciption={currentProject.skills}
        />

        <Section
          id={`${currentProject?.id}-background`}
          paragraph={currentProject.backgroundDescription}
          subtitle="Project Background"
        />

        <Subtitle>Preview</Subtitle>
        <PreviewImage src={currentProject.previewImage1Url} />
        <PreviewImage src={currentProject.previewImage2Url} />

        {currentProject.nextProject ||
          (currentProject.prevProject && (
            <ProjectsFooter
              nextProjectId={currentProject.nextProject}
              prevProjectId={currentProject.prevProject}
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
  gap: 2em;
`;

const PreviewImage = styled.img`
  border-radius: 8px;
`;

const Subtitle = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;
