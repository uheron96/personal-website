import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";

type Props = {
  ref?: React.RefObject<HTMLDivElement | null>;
  id: string;
  imageSrc: string;
  paragraph: string;
  buttonTitle: string;
  onClick: () => void;
};

export const Section = ({
  ref,
  id,
  buttonTitle,
  imageSrc,
  onClick,
  paragraph,
}: Props) => {
  return (
    <Container id={id} ref={ref}>
      <Image src={imageSrc} alt="section image" />
      <Divider />
      <Paragraph>{paragraph}</Paragraph>
      <ButtonContainer>
        <SecondaryButton title={buttonTitle} onClick={onClick} />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
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

const ButtonContainer = styled.div`
  width: 70%;
  align-self: flex-start;
`;
