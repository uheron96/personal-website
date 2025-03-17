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
};

export const Section = ({
  ref,
  id,
  buttonTitle,
  imageSrc,
  onClick,
  title,
  subtitle,
  paragraph,
  narrowImage,
  skillsDesciption,
}: Props) => {
  return (
    <Container id={id} ref={ref}>
      {imageSrc && (
        <Image src={imageSrc} alt="section image" narrow={narrowImage} />
      )}
      <Divider />
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Paragraph>{paragraph}</Paragraph>
      {skillsDesciption && <SkillsText>{skillsDesciption}</SkillsText>}
      {buttonTitle && onClick && (
        <ButtonContainer>
          <SecondaryButton title={buttonTitle} onClick={onClick} />
        </ButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
`;

const Title = styled.h1`
  font-family: var(--display-font);
  letter-spacing: -0.36px;
  font-size: clamp(2em, 5vw, 3em);
`;

const Subtitle = styled.h1`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(2em, 4vw, 3em);
`;

const Image = styled.img<{ narrow?: boolean }>`
  width: 100%;
  height: ${({ narrow }) => (narrow ? "25vh" : "auto")};

  ${({ narrow }) =>
    narrow
      ? `
object-fit: cover;
object-position: top;
border-radius: 8px;
`
      : ""}
`;

const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: var(--gray);
  border-radius: 16px;
`;

const Paragraph = styled.p`
  font-family: var(--body-font);
  font-size: clamp(1em, 2.5vh, 1.3em);
  line-height: 2;
  line-height: 1.8;
  color: var(--gray-dark-blue);
`;

const SkillsText = styled.p`
  font-family: var(--body-font);
  font-size: clamp(1em, 2.5vh, 1.3em);
  line-height: 2;
  line-height: 1.8;
  color: var(--dark-green);
`;

const ButtonContainer = styled.div`
  width: 70%;
  align-self: flex-start;
`;
