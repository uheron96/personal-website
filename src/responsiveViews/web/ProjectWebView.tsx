import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";
import { ProjectsFooter } from "../../components/ProjectsFooter";
import { Text } from "../../components/Text";

export const ProjectWebView = () => {
  const { id } = useParams();
  const currentProject = projectsData.find((proj) => proj.id === id);

  if (!currentProject) return <></>;

  return (
    <>
      <Container>
        <Header />
        <Content>
          <ImageContainer>
            <HeaderImage src={currentProject.narrowImage} />
            <TitleContainer themeColor={currentProject.themeColor}>
              <Text type="Header">{currentProject.title}</Text>
              <Text type="Subtitle">{currentProject.subtitle}</Text>
            </TitleContainer>
          </ImageContainer>
          <Inner>
            <InfoLeft>
              <Section
                subtitle="Summary"
                id={currentProject.id}
                paragraph={currentProject.description}
                skillsDesciption={currentProject.skills}
                buttonTitle={currentProject.buttonTitle}
                onClick={currentProject.buttonAction}
              />
            </InfoLeft>
            <InfoRight>
              <Section
                subtitle="Project Background"
                id={currentProject.id}
                paragraph={currentProject.backgroundDescription}
              />
            </InfoRight>
          </Inner>
          <PreviewsContainer>
            <PreviewImage src={currentProject.previewImage1Url} />
            <PreviewImage src={currentProject.previewImage2Url} />
          </PreviewsContainer>
        </Content>
        <ProjectsFooterContainer>
          <ProjectsFooter
            nextProjectId={currentProject.nextProject}
            prevProjectId={currentProject.prevProject}
          />
        </ProjectsFooterContainer>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 2em 2em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
`;

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
  gap: 1.5em;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 0em;
  position: relative;
`;

const HeaderImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const PreviewImage = styled.img`
  width: 50%;
  max-height: 350px;
  object-fit: contain;
  border-radius: 8px;
`;

const ProjectsFooterContainer = styled.div`
  padding: 1em 4em;
`;

const TitleContainer = styled.div<{ themeColor: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  top: 40%;
  bottom: 4em;
  gap: 0.5em;
  background-color: ${({ themeColor }) => themeColor};
`;

const PreviewsContainer = styled.div`
  border-top: solid 1px var(--gray);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 2em;
  padding-top: 2em;
  gap: 1em;
`;
