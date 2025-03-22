import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Text } from "../../components/Text";
import { useNavLinks } from "../../utils/useNavLinks";
import { Form } from "../../components/Form";

export const ContactMeMobileView = () => {
  const { linkedIn, github } = useNavLinks({
    iconColor: "var(--primary-button-color)",
  });

  return (
    <Container>
      <Header />

      <Inner>
        <Text type="Title">Get in Touch</Text>
        <Text type="Paragraph">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently open to a wide range of opportunities. My preference
          would be to work on a remote project for either web or mobile
          platforms. I’m also happy to hear about opportunites that don’t fit
          that description. I’m a a perfectionist who will always approach each
          task with a sense of purpose and attention to detail. Please do feel
          free to check out my online profiles below and get in touch using the
          form.
        </Text>
        <IconsRow>
          {github}
          {linkedIn}
        </IconsRow>

        <Form />
      </Inner>

      <Footer removeContactOption />
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1.5em;
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
