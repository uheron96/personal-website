import { useNavigate } from "react-router";
import styled from "styled-components";

type Props = {
  textButtonColor?: string;
  iconColor?: string;
};

export const useNavLinks = ({ iconColor, textButtonColor }: Props) => {
  const navigate = useNavigate();

  const githubLink = "https://github.com/uheron";
  const linkedinLink = "https://www.linkedin.com/in/uliana-heron-4ab55a157/";

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Uliana_Heron_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    download: <CVImage onClick={handleDownload} iconColor={iconColor} />,
    github: (
      <GithubImage
        onClick={() => openInNewTab(githubLink)}
        iconColor={iconColor}
      />
    ),
    linkedIn: (
      <LinkedinImage
        onClick={() => openInNewTab(linkedinLink)}
        iconColor={iconColor}
      />
    ),
    logoWithName: (
      <LogoWithNameImage
        src="/svg/logo-with-name.svg"
        alt="logo"
        onClick={() => navigate("/")}
      />
    ),
    logo: <LogoImage onClick={() => navigate("/")} />,

    home: (
      <TextButton
        onClick={() => navigate("/")}
        buttonColor={textButtonColor || "var(--gray-dark-blue)"}
      >
        HOME
      </TextButton>
    ),

    portfolio: (
      <TextButton
        onClick={() => navigate("/portfolio")}
        buttonColor={textButtonColor || "var(--gray-dark-blue)"}
      >
        PORTFOLIO
      </TextButton>
    ),

    contactMe: (
      <TextButton
        onClick={() => navigate("/contactMe")}
        buttonColor={textButtonColor || "var(--gray-dark-blue)"}
      >
        CONTACT ME
      </TextButton>
    ),
  };
};

const GithubImage = styled.div<{ iconColor?: string }>`
  width: clamp(2em, 4vw, 2.5em);
  height: clamp(2em, 4vw, 2.5em);
  background-color: ${({ iconColor }) => iconColor || "var(--base-color)"};
  mask-image: url("/svg/github.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/github.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  cursor: pointer;
`;

const CVImage = styled.div<{ iconColor?: string }>`
  width: clamp(2em, 4vw, 2.5em);
  height: clamp(2em, 4vw, 2.5em);
  background-color: ${({ iconColor }) => iconColor || "var(--base-color)"};
  mask-image: url("/svg/cv.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/cv.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  cursor: pointer;
`;

const LinkedinImage = styled.div<{ iconColor?: string }>`
  width: clamp(2em, 4vw, 2.5em);
  height: clamp(2em, 4vw, 2.5em);
  background-color: ${({ iconColor }) => iconColor || "var(--base-color)"};
  mask-image: url("/svg/linkedin.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/linkedin.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  cursor: pointer;
`;

const TextButton = styled.div<{ buttonColor: string }>`
  color: ${({ buttonColor }) => buttonColor};

  font-family: var(--body-font);
  font-size: clamp(0.8em, 2.5vw, 1em);
  letter-spacing: 0.17em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoWithNameImage = styled.img`
  width: clamp(6em, 10vw, 10em);
  height: auto;
  margin-right: auto;
  cursor: pointer;
`;

const LogoImage = styled.div`
  width: clamp(2em, 3vw, 3em);
  height: clamp(2em, 3vw, 3em);
  background-color: var(--base-color);
  mask-image: url("/svg/logo.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/svg/logo.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`;
