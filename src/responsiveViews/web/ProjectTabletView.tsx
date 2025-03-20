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
      <ImageContainer>
        <HeaderImage src={currentProject.narrowImage} />
        <TitleContainer themeColor={currentProject.themeColor}>
          <Text type="Title">{currentProject.title}</Text>
          <Text type="Subtitle">{currentProject.subtitle}</Text>
        </TitleContainer>
      </ImageContainer>
      <Inner>
        <ProjectInfo>
          <InfoLeft>
            <Text type="Subtitle">Skills</Text>
            <Text type="Highlight">{currentProject?.skills}</Text>
            <ButtonContainer>
              <SecondaryButton
                title={currentProject.buttonTitle}
                onClick={currentProject.buttonAction}
              />
            </ButtonContainer>
          </InfoLeft>
          <InfoRight>
            <Text type="Subtitle">Overview</Text>
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
  padding: 0em 2em 2em;
  gap: 2em;
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 50%;
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1em;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;
`;

const PreviewImage = styled.img`
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  width: 70%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 0em;
  position: relative;
`;

const HeaderImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const TitleContainer = styled.div<{ themeColor: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20%;
  top: 40%;
  bottom: 4em;
  gap: 0.5em;
  background-color: ${({ themeColor }) => themeColor};
`;
