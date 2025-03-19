import styled from "styled-components";

type TextProps = {
  type: "Title" | "Subtitle" | "Paragraph" | "Highlight";
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
  }
};

const Title = styled.h1<{ disabled?: boolean; center?: boolean }>`
  font-family: var(--display-font);
  font-size: clamp(2em, 5vw, 2.5em);
  color: ${({ disabled }) =>
    disabled ? "var(--dark-gray)" : "var(--gray-dark-blue)"};
  ${({ center }) => center && "text-align: center"};
`;

const Subtitle = styled.h1<{ disabled?: boolean; center?: boolean }>`
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.36px;
  font-size: clamp(1.5em, 4vw, 2em);

  color: ${({ disabled }) =>
    disabled ? "var(--dark-gray)" : "var(--gray-dark-blue)"};
  ${({ center }) => center && "text-align: center"};
`;

const Paragraph = styled.p<{ green?: boolean }>`
  font-family: var(--body-font);
  font-size: clamp(1em, 3vw, 1.2em);
  line-height: 2;
  line-height: 1.8;
  color: ${({ green }) =>
    green ? "var(--dark-green)" : "var(--gray-font)"};
`;
