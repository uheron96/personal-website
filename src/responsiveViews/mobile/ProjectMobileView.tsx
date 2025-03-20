import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "../../components/ProjectsFooter";
import { Text } from "../../components/Text";

export const ProjectMobileView = () => {
  const { id } = useParams();
  const currentProject = projectsData.find((proj) => proj.id === id);

  if (!currentProject) return <></>;

  return (
    <Container>
      <Header />
      <ImageContainer>
        <ImageWrapper>
          <HeaderImage src={currentProject.narrowImage} />
        </ImageWrapper>

        <TitleContainer themeColor={currentProject.themeColor}>
          <Text type="Title">{currentProject.title}</Text>
        </TitleContainer>
      </ImageContainer>

      <Inner>
        <Section
          id={currentProject?.id}
          buttonTitle={currentProject.buttonTitle}
          onClick={currentProject.buttonAction}
          paragraph={currentProject.description}
          skillsDesciption={currentProject.skills}
        />

        <Section
          id={`${currentProject?.id}-background`}
          paragraph={currentProject.backgroundDescription}
          subtitle="Project Background"
        />

        <Text type="Subtitle">Preview</Text>
        <PreviewImage src={currentProject.previewImage1Url} />
        <PreviewImage src={currentProject.previewImage2Url} />

        <ProjectsFooter
          nextProjectId={currentProject.nextProject}
          prevProjectId={currentProject.prevProject}
        />
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: scale(1.1);

  &:hover {
    transform: scale(1.3);
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: scale(1.3);
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  height: auto;
  margin-top: 2em;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TitleContainer = styled.div<{ themeColor: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  top: 50%;
  bottom: 4em;
  gap: 0.5em;
  background-color: ${({ themeColor }) => themeColor};
`;
