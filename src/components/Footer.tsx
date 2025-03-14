import styled from "styled-components";
import { SecondaryButton } from "./SecondaryButton";
import { MenuBar } from "./MenuBar";

export const Footer = () => {
  return (
    <Container>
      <Divider />
      <TopContainer>
        <Title>Interested in doing a project together?</Title>
        <ButtonContainer>
          <SecondaryButton title="CONTACT ME" onClick={() => {}} />
        </ButtonContainer>
      </TopContainer>
      <MenuBar type="footer"/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  padding: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Divider = styled.div`
  width: 90%;
  height: 1.5px;
  background-color: var(--gray);
  border-radius: 16px;
`;

const Title = styled.h1`
  font-family: var(--display-font);
  text-align: center;
  font-size: clamp(2em, 5vw, 3em);
`;

const ButtonContainer = styled.div`
  width: 70%;
  align-self: center;
`;
