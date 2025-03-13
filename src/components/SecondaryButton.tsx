import styled from "styled-components";

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const SecondaryButton = ({ title, onClick, disabled }: Props) => {
  return (
    <Container disabled={disabled} onClick={disabled ? () => {} : onClick}>
      <ButtonText disabled={disabled}>{title}</ButtonText>
    </Container>
  );
};

const Container = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  border: 1px solid
    ${({ disabled }) => (disabled ? "var(--gray)" : "var(--gray-dark-blue)")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "" : "var(--gray-dark-blue)"};
  }
`;

const ButtonText = styled.div<{ disabled?: boolean }>`
  color: ${({ disabled }) =>
    disabled ? "var(--gray)" : "var(--gray-dark-blue)"};
  font-family: var(--body-font);
  font-size: clamp(0.9em, 2vw, 1.2em);
  letter-spacing: 0.3em;

  ${Container}:hover & {
    color: ${({ disabled }) =>
      disabled ? "var(--gray)" : "var(--base-color)"};
  }
`;
