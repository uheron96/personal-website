import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "../../components/ProjectsFooter";
import { SecondaryButton } from "../../components/SecondaryButton";
import { Text } from "../../components/Text";

export const ProjectTabletView = () => {
  const { id } = useParams();
  const currentProject = projectsData.find((proj) => proj.id === id);

  if (!currentProject) return <></>;

  return (
    <Container>
      <Header />
      <Inner>
        <PreviewImage src={currentProject.narrowImage} />
        <ProjectInfo>
          <InfoLeft>
            <Text type="Title">{currentProject?.title}</Text>
            <Text type="Highlight">{currentProject?.skills}</Text>
            <ButtonContainer>
              <SecondaryButton
                title={currentProject.buttonTitle}
                onClick={currentProject.buttonAction}
              />
            </ButtonContainer>
          </InfoLeft>
          <InfoRight>
            <Text type="Paragraph">{currentProject.description}</Text>
          </InfoRight>
        </ProjectInfo>

        <Section
          id={`${currentProject?.id}-background`}
          paragraph={currentProject.backgroundDescription}
          subtitle="Project Background"
        />

        <Text type="Subtitle">Preview</Text>
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

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 50%;
`;

const InfoRight = styled.div`
  width: 50%;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;
  border-top: 1px solid var(--gray);
  padding-top: 1.5em;
`;

const PreviewImage = styled.img`
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  width: 70%;
`;
