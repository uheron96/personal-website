import styled from "styled-components";
import { Text } from "./Text";
import { useNavigate } from "react-router";

type Props = {
  isMobile?: boolean;
};

export const ProjectsPreview = ({ isMobile }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Text type="Title" center>
        Engineering personalized, scalable applications for healthcare and daily
        use
      </Text>
      <ImagesContainer>
        <Image
          isMobile={isMobile}
          src="/images/here-health-phone.png"
          onClick={() => navigate("/project/here-health-app")}
        />
        <Image
          isMobile={isMobile}
          src="/images/preventive-phone.png"
          onClick={() => navigate("/project/appointments-app")}
        />
        <Image
          isMobile={isMobile}
          src="/images/scheduling-phone.png"
          onClick={() => navigate("/project/preventive-app")}
        />
      </ImagesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  width: 80%;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img<{ isMobile?: boolean }>`
  width: 30%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: ${({ isMobile }) => (isMobile ? "scale(1.5)" : "scale(1.1)")};
  }
`;
