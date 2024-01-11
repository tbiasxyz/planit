import styled from "styled-components";

const StyledStatistic = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-top-right-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  width: 100%;
`;

const Icon = styled.span`
  padding: 0.5rem;
  background-color: var(--color-grey-0-transparent);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  & svg {
    color: var(--color-accent-500);
    font-size: 1.5rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  & span {
    color: var(--color-grey-700);
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.4px;
  }
`;

const Stat = styled.span`
  background-color: var(--color-grey-0-transparent);
  color: var(--color-grey-700);
  padding: 0.375rem 1rem;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  font-size: 1.25rem;
  align-self: flex-start;
  margin-left: 3rem;
`;

function Statistic({ title = "", stat, icon }) {
  return (
    <StyledStatistic>
      <Title>
        <Icon>{icon}</Icon>
        <span>{title}</span>
      </Title>
      <Stat>{stat}</Stat>
    </StyledStatistic>
  );
}

export default Statistic;
