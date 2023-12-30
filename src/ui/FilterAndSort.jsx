import { lowerCase } from "lodash";
import { createContext, useContext, useState } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";
import { capitalize } from "../utils/helpers";

const StyledFilterAndSort = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;
`;

const Field = styled.span`
  color: var(--color-grey-500);
  font-weight: 500;
  font-size: 1rem;
`;

const Open = styled.div`
  background-color: var(--color-grey-50);
  color: var(--color-grey-500);
  /* border-radius: 3rem; */
  border-radius: var(--border-radius-md);
  cursor: pointer;
  border: none;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-weight: 500;
    font-size: 1.05rem;
  }
  & svg {
    transition: 0.3s ease;
    font-size: 1.125rem;
  }
  &:hover {
    background-color: var(--color-grey-0-transparent);
    & svg {
      transform: scale(1.2);
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: var(--color-grey-0-transparent);
    `}
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  position: fixed;
  z-index: 1000;
  width: ${(props) => props.width || "auto"};
  ${(props) =>
    props.position &&
    css`
      left: ${props.position.x}px;
      top: ${props.position.y}px;
    `}
`;

const Option = styled.span`
  color: var(--color-grey-500);
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-0-transparent);
  }

  &:first-child {
    border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md);
  }
  &:last-child {
    border-bottom-left-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--color-grey-0-transparent);
    `}
`;

const FilterAndSortContext = createContext();

// field and id (Menu) needs to be the same
// options need to have all option
function FilterAndSort({ children, field, type = "filter" }) {
  const [searchParams] = useSearchParams();
  const [openFilterAndSortMenuId, setOpenFilterAndSortMenuId] = useState("");
  const [openFilterAndSortMenuPosition, setOpenFilterAndSortMenuPosition] =
    useState(null);

  const openFilterAndSortMenu = (id, position) => {
    setOpenFilterAndSortMenuId(id);
    setOpenFilterAndSortMenuPosition(position);
  };
  const closeFilterAndSortMenu = () => {
    setOpenFilterAndSortMenuId("");
  };

  function handleMenuClick(e) {
    e.stopPropagation();
    const domRect = e.target.closest("div").getBoundingClientRect();
    const position = {
      y: domRect.y + 55,
      x: domRect.x,
    };
    openFilterAndSortMenu(lowerCase(field), position);
  }

  const params = searchParams.getAll(`${type}-${field}`);
  const selectedParams =
    params.length > 0
      ? params[0]
          .split("-")
          .map((param) => param[0]?.toUpperCase() + param?.slice(1))
          .join(", ")
      : "";
  return (
    <FilterAndSortContext.Provider
      value={{
        openFilterAndSortMenuId,
        openFilterAndSortMenu,
        closeFilterAndSortMenu,
        field,
        openFilterAndSortMenuPosition,
        type,
      }}
    >
      <StyledFilterAndSort>
        <Field>{capitalize(field)}</Field>
        <Open
          onClick={handleMenuClick}
          isActive={
            selectedParams.length > 0 && selectedParams.toLowerCase() !== "all"
          }
        >
          <span>
            {params.length > 0
              ? selectedParams
              : `${
                  type === "filter"
                    ? `Filter with ${field}`
                    : `Sort by ${field}`
                }`}
          </span>
          <HiArrowDown />
        </Open>
        {children}
      </StyledFilterAndSort>
    </FilterAndSortContext.Provider>
  );
}

function Menu({ options, id }) {
  const {
    openFilterAndSortMenuId,
    closeFilterAndSortMenu,
    type,
    openFilterAndSortMenuPosition,
    field,
  } = useContext(FilterAndSortContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useClickOutside(closeFilterAndSortMenu);

  function handleOptionClick(option) {
    if (option.value === "all") {
      searchParams.set(`${type}-${field}`, ["all"]);
      return setSearchParams(searchParams);
    }

    const params = searchParams.getAll(`${type}-${field}`);
    let selectedParams = params.length > 0 ? params[0].split("-") : "";
    if (selectedParams.includes("all"))
      selectedParams = selectedParams.filter((s) => s !== "all");

    let updatedFilterValues = !selectedParams.includes(option.value)
      ? [...selectedParams, option.value].join("-")
      : selectedParams.filter((value) => value !== option.value).join("-");
    if (type === "sort") {
      updatedFilterValues = updatedFilterValues.split("-").at(-1);
    }
    console.log("Updated: ", updatedFilterValues);
    searchParams.set(
      `${type}-${field}`,
      updatedFilterValues.length === 0 ? ["all"] : updatedFilterValues
    );

    setSearchParams(searchParams);
  }

  const params = searchParams.getAll(`${type}-${field}`);
  const selectedParams = params.length > 0 ? params[0].split("-") : ["all"];

  if (openFilterAndSortMenuId !== id) return null;
  return createPortal(
    <StyledMenu
      isOpen={openFilterAndSortMenuId === id}
      ref={ref}
      position={openFilterAndSortMenuPosition}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          onClick={() => handleOptionClick(option)}
          isSelected={selectedParams.includes(option.value)}
        >
          {option.label}
        </Option>
      ))}
    </StyledMenu>,
    document.body
  );
}

FilterAndSort.Menu = Menu;

export default FilterAndSort;
