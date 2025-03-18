import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { Text } from "../../../components/Text";

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
  skillsDesciption,
}: Props) => {
  return (
    <Container id={id} ref={ref}>
      {imageSrc && <Image src={imageSrc} alt="section image" isWeb={isWeb} />}

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

const ButtonContainer = styled.div`
  width: 60%;
  align-self: flex-start;
`;
