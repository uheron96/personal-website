import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { MenuBar } from "./MenuBar";
import { Text } from "../../../components/Text";
import { useNavigate } from "react-router";

type Props = {
  removeContactOption?: boolean;
};

export const Footer = ({ removeContactOption }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Divider />
      {!removeContactOption && (
        <TopContainer>
          <Text type="Title" center>
            Interested in doing a project together?
          </Text>
          <ButtonContainer>
            <SecondaryButton
              title="CONTACT ME"
              onClick={() => navigate("/contactMe")}
            />
          </ButtonContainer>
        </TopContainer>
      )}

      <MenuBar type="footer" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const ButtonContainer = styled.div`
  width: 70%;
  align-self: center;
`;
