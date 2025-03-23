import styled from "styled-components";
import { ChangeEvent } from "react";

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const MessageInput = ({
  name,
  onChange,
  placeholder,
  value,
}: InputProps) => {
  return (
    <Container>
      <FormInput
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const FormInput = styled.textarea`
  flex: 1;
  height: 4em;
  background-color: var(--gray);
  padding: 2em;
  border: 1px solid var(--gray);
  font-family: var(--base-font);
  font-size: clamp(1em, 3vw, 1.5em);

  &:focus {
    border-color: var(--gray-dark-blue);
    outline: none;
  }
`;
