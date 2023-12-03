import styled from "styled-components";

const AuthFormHeading = styled.h2`
  font-size: 3rem;
  color: var(--color-grey-700);
  grid-column: 1 / -1;
  grid-row: 1 /2;
  text-align: center;
  & span {
    background-image: linear-gradient(
      to bottom right,
      var(--color-accent-700) 20%,
      var(--color-accent-500) 42%,
      var(--color-accent-700) 38%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  align-self: center;
`;

export default AuthFormHeading;
