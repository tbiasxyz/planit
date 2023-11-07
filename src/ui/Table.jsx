import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  background-color: green;
  width: 100%;
`;

const StyledHeader = styled.thead`
  padding: 0.25rem;
  background-color: var(--color-grey-50);
`;

const StyledRow = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;

const StyledData = styled.td``;

const StyledBody = styled.tbody``;

// https://dribbble.com/shots/20086925-Users-Table-Preline-UI
// https://dribbble.com/shots/18566916-Table
// https://dribbble.com/shots/19626767-Table-Component

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
