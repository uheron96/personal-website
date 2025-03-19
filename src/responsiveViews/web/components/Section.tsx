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
  extraSpacing?: boolean;
};

export const Section = ({
  id,
  buttonTitle,
  imageSrc,
  title,
  onClick,
  paragraph,
  extraSpacing,
  subtitle,
  skillsDesciption,
}: Props) => {
  return (
    <Container id={id}>
      {imageSrc && <Image src={imageSrc} alt="section image" />}

      {extraSpacing && <Separator />}
      <RightContainer extraSpacing={extraSpacing}>
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
  width: 40%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  object-position: top;
`;

const RightContainer = styled.div<{ extraSpacing?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0em 4em;
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
