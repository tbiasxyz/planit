import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

import FormButton from "./FormButton";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "var(--color-accent-700)";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "var(--color-accent-500)";
  }
  return "var(--color-accent-200)";
};

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: var(--color-grey-50);
  color: var(--color-grey-200);
  outline: none;
  width: 80%;
  height: 7rem;
  transition: 0.3s ease-in-out;
`;

function Dropzone({ setAvatar, id, setValue }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar?.(reader.result);
        setValue?.(id, file);
      };
      reader.readAsDataURL(file);
    },
    [setAvatar, setValue, id]
  );
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    noKeyboard: true,
    noClick: true,
  });

  return (
    <DropzoneContainer
      {...getRootProps({ isFocused, isDragAccept, isDragReject })}
    >
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop or select some image</p>
      <FormButton
        onClick={(e) => {
          e.preventDefault();
          open();
        }}
        type="small"
      >
        Open file
      </FormButton>
    </DropzoneContainer>
  );
}

export default Dropzone;
