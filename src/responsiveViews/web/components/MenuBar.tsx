import styled from "styled-components";
import { useNavLinks } from "../../../utils/useNavLinks";

type Props = { type: "menu" | "footer" };

export const MenuBar = ({ type }: Props) => {
  const { github, linkedIn, contactMe, home, portfolio, logo, download } =
    useNavLinks({
      textButtonColor:
        type === "footer" ? "var(--base-color)" : "var(--gray-dark-blue)",
    });

  return (
    <Container type={type}>
      <TextContainer>
        {type === "footer" && logo}
        {home}
        {portfolio}
        {contactMe}
      </TextContainer>

      {type === "footer" && (
        <SocialIconsContainer>
          {github}
          {linkedIn}
          {download}
        </SocialIconsContainer>
      )}
    </Container>
  );
};

const Container = styled.div<{ type: Props["type"] }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ type }) =>
    type === "footer" ? "var(--gray-dark-blue)" : "var(--base-color)"};
  padding: ${({ type }) => (type === "footer" ? "2em" : "0em")};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  align-items: center;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
