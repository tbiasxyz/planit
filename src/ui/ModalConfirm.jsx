import styled from "styled-components";
import Row from "./Row";
import Heading from "./Heading";
import { capitalize, lowerCase } from "lodash";
import Icon from "./Icon";
import { HiOutlineXMark } from "react-icons/hi2";
import FormButton from "./FormButton";

const StyledModalConfirm = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalMessage = styled.p`
  color: var(--color-grey-500);
`;

const ModalConfirmButton = styled(FormButton)`
  align-self: flex-start;
  &:disabled {
    cursor: not-allowed;
  }
`;

// onClose - attached to div in Modal component
function ModalConfirm({ action, onClose, onConfirm, isLoading }) {
  return (
    <StyledModalConfirm>
      <Row>
        <Heading as="h4">{capitalize(action)}</Heading>
        <Icon onClick={onClose}>
          <HiOutlineXMark />
        </Icon>
      </Row>
      <ModalMessage>Are you sure you want to {lowerCase(action)}?</ModalMessage>
      <ModalConfirmButton onClick={onConfirm} disabled={isLoading}>
        {capitalize(action)}
      </ModalConfirmButton>
    </StyledModalConfirm>
  );
}

export default ModalConfirm;
