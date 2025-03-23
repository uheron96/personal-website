import styled from "styled-components";
import { MenuBar } from "./MenuBar";
import { useNavLinks } from "../../../utils/useNavLinks";

type Props = {
  isWeb?: boolean;
};

export const Header = ({ isWeb }: Props) => {
  const { logoWithName } = useNavLinks({});

  return (
    <Container isWeb={isWeb}>
      {logoWithName}
      <MenuContainer>
        <MenuBar type="menu" />
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div<{ isWeb?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isWeb }) => (isWeb ? "4em 4em 0em" : "2em 2em 0em")};

  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
