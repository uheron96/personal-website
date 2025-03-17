import styled from "styled-components";

type Props = {
  prevProjectName?: string;
  nextProjectName?: string;
  onNextPress?: () => {};
  onPrevPress?: () => {};
};

export const ProjectsFooter = ({
  onPrevPress,
  nextProjectName,
  onNextPress,
  prevProjectName,
}: Props) => {
  return (
    <Container>
      <ProjectContainer alignLeft>
        <ArrowImage left />
        <Title>{prevProjectName}</Title>
        <Subtitle>Previous Project</Subtitle>
      </ProjectContainer>
      <Divider />
      <ProjectContainer>
        <ArrowImage />
        <Title>{nextProjectName}</Title>
        <Subtitle>Next Project</Subtitle>
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

const Title = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;

const Subtitle = styled.h1`
  font-family: var(--body-font);
  color: var(--dark-gray);
  font-weight: 200;
  letter-spacing: -0.36px;
  font-size: clamp(1.1em, 2vw, 1.3em);
`;

const ArrowImage = styled.div<{ left?: boolean }>`
  width: 1.2em;
  height: 1.2em;
  background-color: var(--gray-dark-blue);
  mask-image: ${({ left }) =>
    left ? "url('/svg/arrow-left.svg')" : "url('/svg/arrow-right.svg')"};
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: ${({ left }) =>
    left ? "url('/svg/arrow-left.svg')" : "url('/svg/arrow-right.svg')"};
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  ${ProjectContainer}:hover & {
    background-color: var(--dark-green);
  }
`;
