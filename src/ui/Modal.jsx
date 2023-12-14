import { cloneElement, createContext, useContext, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-0-transparent);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const StyledModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openElementName, setOpenElementName] = useState("");

  const openElement = (name) => setOpenElementName(name);
  const closeElement = () => setOpenElementName("");
  return (
    <ModalContext.Provider
      value={{ openElementName, closeElement, openElement }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openElement } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => openElement(opens),
  });
}

function Window({ children, name }) {
  const { openElementName, closeElement } = useContext(ModalContext);
  const ref = useClickOutside(closeElement);
  if (openElementName !== name) return null;
  return createPortal(
    <Overlay>
      <StyledModalWindow ref={ref} onClick={(e) => e.stopPropagation()}>
        {cloneElement(children, { onClose: closeElement })}
      </StyledModalWindow>
    </Overlay>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
