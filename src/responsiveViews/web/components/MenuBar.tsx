import { useNavigate } from "react-router";
import styled from "styled-components";

type Props = { type: "menu" | "footer" };

export const MenuBar = ({ type }: Props) => {
  const githubLink = "https://github.com/uheron96";
  const linkedinLink = "https://www.linkedin.com/in/uliana-heron-4ab55a157/";
  const navigate = useNavigate();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container type={type}>
      <TextContainer>
        {type === "footer" && <LogoImage />}
        <TextButton onClick={() => navigate("/")} type={type}>
          HOME
        </TextButton>
        <TextButton onClick={() => navigate("/portfolio")} type={type}>
          PORTFOLIO
        </TextButton>
        <TextButton type={type}>CONTACT ME</TextButton>
      </TextContainer>

      {type === "footer" && (
        <SocialIconsContainer>
          <GithubImage onClick={() => openInNewTab(githubLink)} />
          <LinkedinImage onClick={() => openInNewTab(linkedinLink)} />
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

const GithubImage = styled.div`
  width: 1.5em;
  height: 1.5em;
  background-color: var(--base-color);
  mask-image: url("/svg/github.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/github.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  cursor: pointer;
`;

const LinkedinImage = styled.div`
  width: 1.5em;
  height: 1.5em;
  background-color: var(--base-color);
  mask-image: url("/svg/linkedin.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/linkedin.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  cursor: pointer;
`;

const TextButton = styled.div<{ type?: Props["type"] }>`
  color: ${({ type }) =>
    type === "footer" ? "var(--base-color)" : "var(--gray-dark-blue)"};

  font-family: var(--body-font);
  font-size: clamp(0.8em, 2.5vw, 1em);
  letter-spacing: 0.17em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
