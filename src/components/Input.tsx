import styled from "styled-components";
import { Text } from "./Text";
import { ChangeEvent } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
}: InputProps) => {
  return (
    <Container>
      <FormInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const FormInput = styled.input`
  flex: 1;
  height: 3em;
  background-color: var(--gray);
  padding-left: 2em;
  border: 1px solid var(--gray);
  font-family: var(--base-font);
  font-size: clamp(1em, 3vw, 1.5em);

  &:focus {
    border-color: var(--gray-dark-blue);
    outline: none;
  }
`;
