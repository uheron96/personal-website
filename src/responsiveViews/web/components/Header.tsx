import styled from "styled-components";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  return (
    <Container>
      <LogoImage src="/svg/logo.svg" alt="logo" />
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
  padding: 2em 2em 0em;

  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-grow: 1; /* Allows it to grow instead of being limited to 50% */
  justify-content: flex-end; /* Aligns MenuBar to the right */
`;

const LogoImage = styled.img`
  width: 3em;
  height: auto;
  margin-right: auto; /* Pushes MenuContainer to the right */
`;
