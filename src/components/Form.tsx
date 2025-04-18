import styled from "styled-components";
import { Text } from "./Text";
import { Input } from "./Input";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { MessageInput } from "./MessageInput";
import { Message } from "./Message";
import posthog from "posthog-js";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export const Form = () => {
  const [loadingSubmission, setLoadingSubmission] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [response, setResponse] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormDataType>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    posthog.capture("attempted_contact_form_submission");
    setLoadingSubmission(true);
    e && e.preventDefault();

    const newErrors: Partial<FormDataType> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoadingSubmission(false);
      return;
    }

    const response = await fetch("https://formspree.io/f/xzzerdqy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      posthog.capture("contact_form_submission_success");

      setResponse({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      posthog.capture("contact_form_submission_failure");
      setResponse({
        success: false,
        message: "Something went wrong. Please try again!",
      });
    }

    setShowMessage(true);
    setLoadingSubmission(false);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <Text type="Paragraph">Name</Text>
        <Input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Snow"
          required
        />
        {errors.name && (
          <Text type="Highlight" highlightColor="red">
            {errors.name}
          </Text>
        )}
      </InputContainer>

      <InputContainer>
        <Text type="Paragraph">Email Address</Text>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john-snow@gmail.com"
          required
        />
        {errors.email && (
          <Text type="Highlight" highlightColor="red">
            {errors.email}
          </Text>
        )}
      </InputContainer>

      <InputContainer>
        <Text type="Paragraph">Message</Text>
        <MessageInput
          name="message"
          onChange={handleChange}
          placeholder="Leave your message here..."
          value={formData.message}
        />
        {errors.message && (
          <Text type="Highlight" highlightColor="red">
            {errors.message}
          </Text>
        )}
      </InputContainer>

      <ButtonContainer>
        <PrimaryButton
          onClick={() => handleSubmit()}
          title="SEND MESSAGE"
          disabled={loadingSubmission}
        />
      </ButtonContainer>

      {showMessage && response && (
        <MessageContainer>
          <Message
            type={response?.success ? "success" : "failure"}
            onClose={() => setShowMessage(false)}
          />
        </MessageContainer>
      )}
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ButtonContainer = styled.div`
  width: 60%;
  padding-top: 1em;
  padding-bottom: 2em;
`;

const MessageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 90%;
  max-width: 500px;
  padding: 2em;
  border-radius: 8px;
  background-color: var(--base-color);
  box-shadow: 0 10px 6px var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
`;
