import styled from "styled-components";
import { useNavLinks } from "../../../utils/useNavLinks";

type Props = { type: "menu" | "footer" };

export const MenuBar = ({ type }: Props) => {
  const { github, linkedIn, contactMe, home, portfolio } =
    useNavLinks("var(--base-color)");

  return (
    <Container type={type}>
      {type === "footer" && <LogoImage />}
      {home}
      {portfolio}
      {contactMe}
      {type === "footer" && (
        <SocialIconsContainer>
          {github}
          {linkedIn}
        </SocialIconsContainer>
      )}
    </Container>
  );
};

const Container = styled.div<{ type: Props["type"] }>`
  display: flex;
  flex-direction: column;
  ${({ type }) => (type === "footer" ? "width: 100%;" : "width: 80%;")}
  padding:   ${({ type }) => (type === "footer" ? "2em 0em;" : "2em;")}
 2em 0em;
  align-items: center;
  background-color: var(--gray-dark-blue);
  gap: 1em;
`;

const LogoImage = styled.div`
  width: 4em;
  height: 3em;
  background-color: var(--base-color);
  mask-image: url("/svg/logo.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/logo.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: row;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: center;
`;
