import styled from "styled-components";

const StyledSearchbar = styled.input.attrs({ type: "text" })`
  padding: 0.35rem 0.75rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 2px solid transparent;
  box-shadow: var(--shadow-md);
  outline: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.1rem;
  transition: 0.2s ease;

  &::placeholder {
    color: var(--color-grey-100);
    font-size: 1rem;
  }

  &:focus {
    border: 2px solid var(--color-accent-500);
    background-color: var(--color-accent-50);
    color: var(--color-accent-700);
  }
`;

function Searchbar({ setSearchValue }) {
  return <StyledSearchbar onChange={(e) => setSearchValue(e.target.value)} />;
}

export default Searchbar;
