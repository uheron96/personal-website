import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { Text } from "../../../components/Text";

type Props = {
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
    <Container id={id}>
      {title && imageSrc && (
        <ImageContainer>
          <Image src={imageSrc} alt="section image" narrow={narrowImage} />

          <TitleContainer>
            <Text type="Title">{title}</Text>
          </TitleContainer>
        </ImageContainer>
      )}
      {subtitle && <Text type="Subtitle">{subtitle}</Text>}
      {paragraph && <Text type="Paragraph">{paragraph}</Text>}
      {skillsDesciption && <Text type="Highlight" highlightColor="green">{skillsDesciption}</Text>}
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

const Image = styled.img<{ narrow?: boolean }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: var(--gray);
  border-radius: 16px;
`;

const ButtonContainer = styled.div`
  width: 70%;
  align-self: flex-start;
`;

const TitleContainer = styled.div`
  position: absolute;
  background-color: var(--base-color);
  width: 70%;
  z-index: 1;
  bottom: 0;
  padding: 1em;
  border-top-right-radius: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;
