import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { projectsData } from "../../data/projects";
import { useParams } from "react-router-dom";
import { Section } from "./components/Section";

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
          paragraph="tbd"
          title={currentProject?.title}
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
`;
