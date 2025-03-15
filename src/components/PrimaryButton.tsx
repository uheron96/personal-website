import styled from "styled-components";

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  narrow?: boolean;
};

export const PrimaryButton = ({ title, onClick, disabled, narrow }: Props) => {
  return (
    <Container
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      narrow={narrow}
    >
      <ImageContainer disabled={disabled} narrow={narrow}>
        <DownArrowsImage />
      </ImageContainer>
      <TextContainer>
        <ButtonText>{title}</ButtonText>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div<{ disabled?: boolean; narrow?: boolean }>`
  background-color: ${({ disabled }) =>
    disabled
      ? "var(--primary-button-disabled-color)"
      : "var(--primary-button-color)"};
  height: ${({ narrow }) => (narrow ? "5vh" : "7vh")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled
        ? "var(--primary-button-disabled-color)"
        : "var(--primary-button-hover-color)"};
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ButtonText = styled.div`
  color: var(--base-color);
  font-family: var(--body-font);
  font-size: clamp(0.9em, 2vw, 1.2em);
  letter-spacing: 0.3em;
  text-align: center;
`;

const ImageContainer = styled.div<{ disabled?: boolean; narrow?: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? "var(--gray)" : "var(--gray-dark-blue)"};
  height: ${({ narrow }) => (narrow ? "5vh" : "7vh")};
  width: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Container}:hover & {
    background-color: ${({ disabled }) =>
      disabled ? "var(--gray)" : "var(--dark-green)"};
  }
`;

const DownArrowsImage = styled.div<{ disabled?: boolean }>`
  width: 1.5em;
  height: 1.5em;
  background-color: ${({ disabled }) =>
    disabled ? "var(--dark-green)" : "var(--base-color)"};
  mask-image: url("/svg/down-arrows.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/down-arrows.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  ${Container}:hover & {
    background-color: ${({ disabled }) =>
      disabled ? "var(--dark-green)" : "var(--base-color)"};
  }
`;
