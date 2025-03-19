import { useRef, useState } from "react";
import styled from "styled-components";
import { MenuBar } from "./MenuBar";
import { useNavLinks } from "../../../utils/useNavLinks";

export const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const { logoWithName } = useNavLinks();

  return (
    <Container>
      {logoWithName}
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
  z-index: 1;
  top: 5em;
  right: 2em;
`;

const MenuImage = styled.img`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;
