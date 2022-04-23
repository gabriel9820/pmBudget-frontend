import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  & > button {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: transparent;
    border: none;
  }
`;
