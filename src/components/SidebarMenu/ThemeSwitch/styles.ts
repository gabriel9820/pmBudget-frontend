import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 2.5rem;
  border-radius: 0.25rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 48.5%;
    height: 100%;
    border-radius: 0.25rem;

    &.active,
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.textSecondary};
      cursor: pointer;
    }
  }
`;
