import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { Text } from "../../../components/Text";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  paragraph?: string;
  buttonTitle?: string;
  onClick?: () => void;
  skillsDesciption?: string;
  reverseLayout?: boolean;
  wideImage?: boolean;
};

export const Section = ({
  id,
  buttonTitle,
  imageSrc,
  title,
  onClick,
  paragraph,
  subtitle,
  skillsDesciption,
  reverseLayout,
  wideImage,
}: Props) => {
  return (
    <Container id={id}>
      {!reverseLayout && imageSrc && (
        <Image src={imageSrc} alt="section image" wideImage={wideImage} />
      )}

      <RightContainer>
        <Inner>
          {title && <Text type="Title">{title}</Text>}
          {subtitle && <Text type="Subtitle">{subtitle}</Text>}
          {paragraph && <Text type="Paragraph">{paragraph}</Text>}
          {skillsDesciption && <Text type="Highlight">{skillsDesciption}</Text>}
        </Inner>
        {buttonTitle && onClick && (
          <ButtonContainer>
            <SecondaryButton title={buttonTitle} onClick={onClick} />
          </ButtonContainer>
        )}
      </RightContainer>

      {reverseLayout && imageSrc && (
        <Image src={imageSrc} alt="section image" wideImage={wideImage} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4em;
`;

const Image = styled.img<{ wideImage?: boolean }>`
  width: ${({ wideImage }) => (wideImage ? "60%" : "40%")};
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  object-position: top;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ButtonContainer = styled.div`
  margin-top: 1em;
  width: 60%;
  align-self: flex-start;
`;
