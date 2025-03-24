import styled from "styled-components";
import { Text } from "./Text";
import { SecondaryButton } from "./SecondaryButton";

type Resolution = "success" | "failure";

export const Message = ({
  type,
  onClose,
}: {
  type: Resolution;
  onClose: () => void;
}) => {
  return (
    <Container type={type}>
      {type === "failure" && (
        <>
          <Text type="Title">Something went wrong...</Text>
          <Text type="Paragraph">
            Please try again. If no luck, please email me at uheron96@gmail.com.
          </Text>
        </>
      )}

      {type === "success" && (
        <>
          <Text type="Title">Talk to you soon!</Text>
          <Text type="Paragraph">
            I recevied your message and will contact you as soon as possible.
          </Text>
        </>
      )}

      <SecondaryButton onClick={onClose} title="CLOSE" />
    </Container>
  );
};

const Container = styled.div<{ type: Resolution }>`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border: 1.5px solid var(--gray);
  padding: 1.5em;
  border-radius: 8px;
  background-color: ${({ type }) =>
    type === "success" ? "var(--opaque-green)" : "var(--opaque-red);"};
`;
