import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
`;

const StyledHeader = styled.thead`
  & tr {
    background-color: var(--color-grey-50);
    padding: 0.75rem;
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  }

  & tr td {
    color: var(--color-grey-500);
    font-weight: 700;
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

  & tr td {
    color: var(--color-grey-700);
    font-size: 1.125rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

const StyledData = styled.td``;

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

function Data({ children }) {
  return <StyledData>{children}</StyledData>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}

Table.Header = Header;
Table.Body = Body;
Table.Data = Data;
Table.Row = Row;

export default Table;
