import styled from "styled-components";

type Props = { type: "menu" | "footer" };

export const MenuBar = ({ type }: Props) => {
  const githubLink = "https://github.com/uheron96";
  const linkedinLink = "https://www.linkedin.com/in/uliana-heron-4ab55a157/";

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container type={type}>
      {type === "footer" && <LogoImage />}
      <TextButton>Home</TextButton>
      <TextButton>Portfolio</TextButton>
      <TextButton>Contact me</TextButton>

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
  flex-direction: column;
  ${({ type }) => (type === "footer" ? "width: 100%;" : "width: 80%;")}
  padding: 2em;
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

const TextButton = styled.div`
  font-family: var(--body-font);
  font-size: clamp(1em, 3vw, 1.4em);
  color: var(--base-color);
  letter-spacing: 0.17em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
