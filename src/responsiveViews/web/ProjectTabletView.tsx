import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "../../components/ProjectsFooter";
import { SecondaryButton } from "../../components/SecondaryButton";

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
            <Title>{currentProject?.title}</Title>
            <SkillsText>{currentProject.skills}</SkillsText>
            <ButtonContainer>
              <SecondaryButton
                title={currentProject.buttonTitle}
                onClick={currentProject.buttonAction}
              />
            </ButtonContainer>
          </InfoLeft>
          <InfoRight>
            <Paragraph>{currentProject.description}</Paragraph>
          </InfoRight>
        </ProjectInfo>

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

const Subtitle = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;

const Title = styled.h1`
  font-family: var(--display-font);
  font-size: clamp(2em, 4vw, 2.5em);
`;

const SkillsText = styled.p`
  font-family: var(--body-font);
  font-size: clamp(1em, 2vh, 1.3em);
  line-height: 2;
  line-height: 1.8;
  color: var(--dark-green);
`;

const ButtonContainer = styled.div`
  width: 70%;
`;

const Paragraph = styled.p`
  font-family: var(--body-font);
  font-size: clamp(1em, 2vh, 3em);
  line-height: 2;
  line-height: 1.8;
  color: var(--gray-dark-blue);
`;
