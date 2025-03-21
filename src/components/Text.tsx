import styled from "styled-components";

type TextProps = {
  type: "Title" | "Subtitle" | "Paragraph" | "Highlight" | "Header";
  children: string;

  disabled?: boolean;
  center?: boolean;
};

export const Text = ({ type, disabled, children, center }: TextProps) => {
  switch (type) {
    case "Title":
      return (
        <Title disabled={disabled} center={center}>
          {children}
        </Title>
      );
    case "Subtitle":
      return (
        <Subtitle disabled={disabled} center={center}>
          {children}
        </Subtitle>
      );
    case "Paragraph":
      return <Paragraph>{children}</Paragraph>;
    case "Highlight":
      return <Paragraph green>{children}</Paragraph>;
    case "Header":
      return <Header>{children}</Header>;
  }
};

const Title = styled.h1<{ disabled?: boolean; center?: boolean }>`
  font-family: var(--display-font);
  font-size: clamp(1.6em, 5vw, 2.5em);
  color: ${({ disabled }) =>
    disabled ? "var(--dark-gray)" : "var(--gray-dark-blue)"};
  ${({ center }) => center && "text-align: center"};
  background-color: transparent;
`;

const Subtitle = styled.h1<{ disabled?: boolean; center?: boolean }>`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(1.5em, 4vw, 1.9em);

  color: ${({ disabled }) =>
    disabled ? "var(--dark-gray)" : "var(--gray-dark-blue)"};
  ${({ center }) => center && "text-align: center"};
  background-color: transparent;
`;

const Paragraph = styled.p<{ green?: boolean }>`
  font-family: var(--body-font);
  line-height: 2;
  line-height: 1.8;
  color: ${({ green }) => (green ? "var(--dark-green)" : "var(--gray-font)")};
  font-size: clamp(1em, 3vw, 1.5em);
  background-color: transparent;
`;

const Header = styled.h1<{ disabled?: boolean; center?: boolean }>`
  font-family: var(--display-font);
  font-size: clamp(3em, 7vw, 4em);
  color: var(--gray-dark-blue);
  background-color: transparent;
`;
