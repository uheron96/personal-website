import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Text } from "../../components/Text";
import { useNavLinks } from "../../utils/useNavLinks";
import { Form } from "../../components/Form";

export const ContactMeWebView = () => {
  const { linkedIn, github, download } = useNavLinks({
    iconColor: "var(--primary-button-color)",
  });

  return (
    <>
      <Container>
        <Header />
        <Inner>
          <Row>
            <TitleContainer>
              <Text type="Title">Get in Touch</Text>
            </TitleContainer>

            <ParagraphContainer>
              <Text type="Paragraph">
                I’d love to hear about what you’re working on and how I could
                help. I’m currently open to a wide range of opportunities. My
                preference would be to work on a remote project for either web
                or mobile platforms. I’m also happy to hear about opportunites
                that don’t fit that description. I’m a a perfectionist who will
                always approach each task with a sense of purpose and attention
                to detail. Please do feel free to check out my online profiles
                below and get in touch using the form.
              </Text>
              <IconsRow>
                {github}
                {linkedIn}
                {download}
              </IconsRow>
            </ParagraphContainer>
          </Row>

          <Divider />

          <Row>
            <TitleContainer>
              <Text type="Title">Contact Me</Text>
            </TitleContainer>

            <ParagraphContainer>
              <Form />
            </ParagraphContainer>
          </Row>
        </Inner>
      </Container>
      <Footer removeContactOption />
    </>
  );
};

const Container = styled.div`
  padding: 2em 2em;
`;

const Inner = styled.div`
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  gap: 4em;

  max-width: 1440px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  width: 50%;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 50%;
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const Divider = styled.div`
  width: 100%;
  background-color: var(--gray);
  height: 1px;
`;
