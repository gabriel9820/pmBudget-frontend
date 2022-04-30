import styled from "styled-components";

export const Container = styled.div`
  &.active {
    color: ${({ theme }) => theme.colors.green};
  }

  &.inactive {
    color: ${({ theme }) => theme.colors.red};
  }
`;
