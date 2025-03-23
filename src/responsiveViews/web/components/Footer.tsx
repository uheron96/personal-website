import styled from "styled-components";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { MenuBar } from "./MenuBar";
import { Text } from "../../../components/Text";
import { useNavigate } from "react-router";

type Props = { isWeb?: boolean; removeContactOption?: boolean };

export const Footer = ({ isWeb, removeContactOption }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {!removeContactOption && (
        <TopContainer>
          <Text type="Title">Interested in doing a project together?</Text>

          <ButtonContainer>
            <SecondaryButton
              title="CONTACT ME"
              onClick={() => navigate("/contactMe")}
              narrow={!isWeb}
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
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 3em;
  padding-right: 3em;
  padding-left: 3em;
  justify-content: space-between;
  gap: 2em;
`;

const ButtonContainer = styled.div`
  width: 30%;
  align-self: center;
`;
