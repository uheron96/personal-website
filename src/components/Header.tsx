import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <LogoImage src="/svg/logo.svg" alt="logo" />
      <MenuImage src="/svg/hamburger.svg" alt="menu" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 3em;
  height: auto;
`;

const MenuImage = styled.img`
  width: 2em;
  height: auto;
`;
