import styled from "styled-components";
import { MenuBar } from "./MenuBar";
import { useNavigate } from "react-router";
import { useNavLinks } from "../../../utils/useNavLinks";

export const Header = () => {
  const { logoWithName } = useNavLinks();

  return (
    <Container>
      {logoWithName}
      <MenuContainer>
        <MenuBar type="menu" />
      </MenuContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4em 4em 0em;

  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
