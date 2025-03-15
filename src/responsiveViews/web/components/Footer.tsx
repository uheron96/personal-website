import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { MenuBar } from "./MenuBar";

type Props = { isWeb?: boolean };

export const Footer = ({ isWeb }: Props) => {
  return (
    <Container>
      <TopContainer>
        <Title>Interested in doing a project together?</Title>
        <Divider />
        <ButtonContainer>
          <SecondaryButton
            title="CONTACT ME"
            onClick={() => {}}
            narrow={!isWeb}
          />
        </ButtonContainer>
      </TopContainer>
      <MenuBar type="footer" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1.2px;
  width: 20vw;
  background-color: var(--gray);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3em;
  justify-content: space-between;
  gap: 2em;
`;

const Title = styled.h1`
  font-family: var(--display-font);
  text-align: center;
  font-size: clamp(2em, 3vw, 3em);
  width: 30%;
`;

const ButtonContainer = styled.div`
  width: 30%;
  align-self: center;
`;
