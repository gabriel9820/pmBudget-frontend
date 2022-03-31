import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textPrimary};

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.income {
        color: ${({ theme }) => theme.colors.green};
      }

      &.expense {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
