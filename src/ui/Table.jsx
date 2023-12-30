import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
`;

const StyledHeader = styled.thead`
  & tr {
    background-color: var(--color-grey-0);
    padding: 0.75rem;
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
    box-shadow: var(--shadow-sm);
  }

  & tr td {
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: 1.175rem;
  }
`;

const StyledRow = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  position: relative;
`;

const StyledBody = styled.tbody`
  background-color: var(--color-grey-0);

  & tr {
    padding: 1rem;
  }

  & tr:not(:last-of-type) {
    border-bottom: 2px solid var(--color-grey-50);
  }

  & tr:last-of-type {
    border-bottom: none;
  }

  & tr td {
    color: var(--color-grey-700);
    font-size: 1.125rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

const Footer = styled.div`
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  color: var(--color-grey-500);
  border-bottom-left-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
  padding: 0.25rem;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable columns={columns}>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Body({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledBody columns={columns}>{children}</StyledBody>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}

function Data({ children }) {
  return <td>{children}</td>;
}

Table.Header = Header;
Table.Body = Body;
Table.Data = Data;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
