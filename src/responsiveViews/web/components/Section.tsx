import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  id: string;
  imageSrc: string;
  paragraph: string;
  buttonTitle: string;
  onClick: () => void;
  isWeb?: boolean;
};

export const Section = ({
  ref,
  id,
  buttonTitle,
  imageSrc,
  onClick,
  paragraph,
  isWeb,
}: Props) => {
  return (
    <Container id={id} ref={ref}>
      <Image src={imageSrc} alt="section image" isWeb={isWeb} />
      <RightContainer>
        <Inner>
          <Title>About Me</Title>
          <Paragraph isWeb={isWeb}>{paragraph}</Paragraph>
        </Inner>

        <ButtonContainer>
          <SecondaryButton
            title={buttonTitle}
            onClick={onClick}
            narrow={!isWeb}
          />
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch; /* Ensures both items match in height */
`;

const Image = styled.img<{ isWeb?: boolean }>`
  width: ${({ isWeb }) => (isWeb ? "50%" : "40%")};
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  margin-right: 2em;
  margin-left: 2em;
  gap: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  flex: 1;
  justify-content: space-between;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Title = styled.h1`
  font-family: var(--display-font);
  font-size: clamp(3em, 5vw, 3em);
`;

const Paragraph = styled.p<{ isWeb?: boolean }>`
  font-family: var(--body-font);
  font-size: ${({ isWeb }) =>
    isWeb ? "clamp(1.5em, 3.5vh, 3em)" : "clamp(1em, 2vh, 3em)"};
  line-height: 2;
  line-height: 1.8;
  color: var(--gray-dark-blue);
`;

const ButtonContainer = styled.div`
  width: 60%;
  align-self: flex-start;
`;
