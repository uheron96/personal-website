import styled from "styled-components";
import { projectsData } from "../data/projects";
import { Text } from "./Text";
import { useNavigate } from "react-router";

type Props = {
  nextProjectId?: string;
  prevProjectId?: string;
};

export const ProjectsFooter = ({ nextProjectId, prevProjectId }: Props) => {
  const nextProject = projectsData.find((prj) => prj.id === nextProjectId);
  const nextProjectName = nextProject && nextProject.title;
  const nextProjectDisabled = !nextProject || !nextProjectName;
  const prevProject = projectsData.find((prj) => prj.id === prevProjectId);
  const prevProjectName = prevProject && prevProject.title;
  const prevProjectDisabled = !prevProject || !prevProjectName;

  const navigate = useNavigate();

  const onNext = () => {
    if (nextProject) navigate(`/project/${nextProject.id}`);
  };

  const onPrev = () => {
    if (prevProject) navigate(`/project/${prevProject.id}`);
  };

  return (
    <Container>
      <ProjectContainer alignLeft onClick={onPrev}>
        <ArrowImage left disabled={prevProjectDisabled} />
        <Text type="Subtitle" disabled={prevProjectDisabled}>
          {prevProjectName || "No projects"}
        </Text>
      </ProjectContainer>
      <Divider />
      <ProjectContainer onClick={onNext}>
        <ArrowImage disabled={nextProjectDisabled} />
        <Text type="Subtitle" disabled={nextProjectDisabled}>
          {nextProjectName || "No projects"}
        </Text>
      </ProjectContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-top: 1.5em;
`;

const ProjectContainer = styled.div<{ alignLeft?: boolean }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "flex-end")};
`;

const Divider = styled.div`
  height: 100%;
  height: 5em;
  width: 0.05em;
  background-color: var(--gray);
`;

const ArrowImage = styled.div<{ left?: boolean; disabled?: boolean }>`
  width: 1.2em;
  height: 1.2em;
  background-color: ${({ disabled }) =>
    disabled ? "var(--gray)" : "var(--dark-gray)"};
  mask-image: ${({ left }) =>
    left ? "url('/svg/arrow-left.svg')" : "url('/svg/arrow-right.svg')"};
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: ${({ left }) =>
    left ? "url('/svg/arrow-left.svg')" : "url('/svg/arrow-right.svg')"};
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  ${ProjectContainer}:hover & {
    background-color: ${({ disabled }) =>
      disabled ? "var(--gray)" : "var(--dark-green)"};
  }
`;
