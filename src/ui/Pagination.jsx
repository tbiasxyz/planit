import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { ITEMS_PER_PAGE } from "../utils/constants";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { useEffect } from "react";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.5rem;
  & svg {
    font-size: 2rem;
    background-color: transparent;
    padding: 0.25rem;
    cursor: pointer;
    color: var(--color-grey-700);
    border-radius: var(--border-radius-sm);
    &:hover {
      background-color: var(--color-grey-0-transparent);
    }
  }
`;

const PageButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  ${(props) =>
    props.isCurrentPage
      ? css`
          background-color: var(--color-accent-500);
          color: var(--color-white);
        `
      : css`
          background-color: transparent;
          color: var(--color-grey-700);
          &:hover {
            background-color: var(--color-grey-0-transparent);
          }
        `};
`;

function Pagination({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let curPage = +searchParams.get("page") || 1;
  const numPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  // if (items.length < ITEMS_PER_PAGE) {
  //   curPage = 1;
  // }

  useEffect(() => {
    if (items.length < ITEMS_PER_PAGE) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [items.length, searchParams, setSearchParams]);

  function handleNextPage() {
    const nextPage = curPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  function handlePreviousPage() {
    const prevPage = curPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  function handleButtonClick(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      {numPages === 1 ? (
        <p>
          Showing <span>{(curPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
          <span>{items.length}</span> of <span>{items.length}</span> results
        </p>
      ) : (
        <Pages>
          {curPage > 1 && <HiArrowSmallLeft onClick={handlePreviousPage} />}

          <PageButtons>
            {Array.from({ length: numPages }, (_, i) => i + 1).map((i) => (
              <PageButton
                key={Math.random()}
                isCurrentPage={curPage === i}
                onClick={() => handleButtonClick(i)}
              >
                {i}
              </PageButton>
            ))}
          </PageButtons>
          {curPage < numPages && <HiArrowSmallRight onClick={handleNextPage} />}
        </Pages>
      )}
    </StyledPagination>
  );
}

export default Pagination;
