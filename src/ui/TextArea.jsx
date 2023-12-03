import { useState } from "react";
import styled, { css } from "styled-components";

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TextAreaField = styled.textarea`
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  height: 100px;
  padding: 1rem;
  font-weight: 500;
  font-size: 1rem;
  resize: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  border: 2px solid transparent;
  transition: 0.2s ease;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);

  &:focus {
    border: 2px solid var(--color-accent-700);
  }

  ${(props) =>
    props.gridArea &&
    css`
      grid-column: ${props.gridArea.column};
      grid-row: ${props.gridArea.row};
    `}
`;

const WordLimit = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  & span {
    font-size: 1rem;
    color: var(--color-grey-700);
  }
`;

function TextArea({
  placeholder,
  id,
  register,
  required,
  charsLimit,
  defaultText,
}) {
  const [text, setText] = useState(defaultText ? defaultText : "");

  function handleChangeText(value) {
    if (value.length <= charsLimit) {
      setText(value);
    } else return;
  }

  return (
    <StyledTextArea>
      <TextAreaField
        placeholder={placeholder}
        {...register?.(id, {
          required: required ? "This field is required" : false,
        })}
        value={text}
        onChange={(e) => handleChangeText(e.target.value)}
        id={id}
      />
      {charsLimit && (
        <WordLimit>
          <span>{text.length}</span>
          <span>/</span>
          <span>{charsLimit}</span>
        </WordLimit>
      )}
    </StyledTextArea>
  );
}

export default TextArea;
