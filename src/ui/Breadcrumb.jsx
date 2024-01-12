import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledBreadcrumb = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.5rem;
  & a {
    display: flex;
    gap: 0.25rem;
    & span:first-of-type {
      transition: 0.2s ease;
    }
    &:hover span:first-of-type {
      color: var(--color-accent-500);
    }
  }
  ${(props) => props.style}
`;

const PathPart = styled.span`
  font-size: 1rem;
  ${(props) =>
    props.isCurrent &&
    css`
      color: var(--color-accent-500);
    `}
  ${(props) =>
    !props.isCurrent &&
    css`
      color: var(--color-grey-500);
    `}
`;

const Slash = styled.span`
  color: var(--color-grey-200);
`;

function Breadcrumb({ currentPart, style = {} }) {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").slice(2, currentPart ? -1 : undefined);
  if (currentPart) pathParts.push(currentPart);
  const filteredPathParts = pathParts.filter((part) => part !== "project");

  return (
    <StyledBreadcrumb style={style}>
      {filteredPathParts.map((pathPart, i) => (
        <>
          {i + 1 !== filteredPathParts.length ? (
            <Link to={`/app/${pathPart}`} key={pathPart}>
              <PathPart isCurrent={i + 1 === filteredPathParts.length}>
                {pathPart}
              </PathPart>
              <Slash>/</Slash>
            </Link>
          ) : (
            <PathPart
              key={pathPart}
              isCurrent={i + 1 === filteredPathParts.length}
            >
              {pathPart}
            </PathPart>
          )}
        </>
      ))}
    </StyledBreadcrumb>
  );
}

export default Breadcrumb;
