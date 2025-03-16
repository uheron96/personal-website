import { useRef, useState } from "react";
import styled from "styled-components";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <LogoImage src="/svg/logo.svg" alt="logo" />
      <MenuImage
        src={menuIsOpen ? "/svg/close.svg" : "/svg/hamburger.svg"}
        alt="menu"
        onClick={handleMenuPress}
      />

      {menuIsOpen && (
        <MenuContainer ref={menuRef}>
          <MenuBar type="menu" />
        </MenuContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em 2em 0em;
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5em;
  right: 2em;
`;

const LogoImage = styled.img`
  width: 3em;
  height: auto;
`;

const MenuImage = styled.img`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;
