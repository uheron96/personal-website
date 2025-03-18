import styled from "styled-components";
import { useNavLinks } from "../../../utils/useNavLinks";

type Props = { type: "menu" | "footer" };

export const MenuBar = ({ type }: Props) => {
  const { github, linkedIn, contactMe, home, portfolio } = useNavLinks(
    type === "footer" ? "var(--base-color)" : "var(--gray-dark-blue)"
  );

  return (
    <Container type={type}>
      <TextContainer>
        {type === "footer" && <LogoImage />}
        {home}
        {portfolio}
        {contactMe}
      </TextContainer>

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

const LogoImage = styled.div`
  width: 3em;
  height: 2em;
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
  align-items: center;
  justify-content: center;
`;
