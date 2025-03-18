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
      {title && <Text type="Title">{title}</Text>}
      {subtitle && <Text type="Subtitle">{subtitle}</Text>}
      {paragraph && <Text type="Paragraph">{paragraph}</Text>}
      {skillsDesciption && <Text type="Highlight">{skillsDesciption}</Text>}
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

const ButtonContainer = styled.div`
  width: 70%;
  align-self: flex-start;
`;
