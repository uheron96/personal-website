import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";

type Props = {
  ref?: React.RefObject<HTMLDivElement | null>;
  id: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  narrowImage?: boolean;
  paragraph?: string;
  buttonTitle?: string;
  onClick?: () => void;
  skillsDesciption?: string;
  isWeb?: boolean;
  extraSpacing?: boolean;
};

export const Section = ({
  ref,
  id,
  buttonTitle,
  imageSrc,
  title,
  onClick,
  paragraph,
  isWeb,
  extraSpacing,
  subtitle,
}: Props) => {
  return (
    <Container id={id} ref={ref}>
      {imageSrc && <Image src={imageSrc} alt="section image" isWeb={isWeb} />}

      {extraSpacing && <Separator />}
      <RightContainer extraSpacing={extraSpacing}>
        <Inner>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Paragraph isWeb={isWeb}>{paragraph}</Paragraph>
        </Inner>
        {buttonTitle && onClick && (
          <ButtonContainer>
            <SecondaryButton
              title={buttonTitle}
              onClick={onClick}
              narrow={!isWeb}
            />
          </ButtonContainer>
        )}
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Separator = styled.div`
  width: 5em;
`;

const Image = styled.img<{ isWeb?: boolean }>`
  width: ${({ isWeb }) => (isWeb ? "50%" : "40%")};
  height: 100%;
  align-self: ${({ isWeb }) => (isWeb ? "flex-start" : "center")};
  margin-right: 2em;
`;

const RightContainer = styled.div<{ extraSpacing?: boolean }>`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  gap: 1em;
  padding-top: ${({ extraSpacing }) => (extraSpacing ? "4em" : "1em")};
  padding-bottom: ${({ extraSpacing }) => (extraSpacing ? "4em" : "1em")};
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

const Subtitle = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;
