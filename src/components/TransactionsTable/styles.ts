import styled from "styled-components";

export const ValueCell = styled.div`
  &.income {
    color: ${({ theme }) => theme.colors.green};
  }

  &.expense {
    color: ${({ theme }) => theme.colors.red};
  }
`;
