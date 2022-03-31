import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
    background: ${({ theme }) => darken(0.02, theme.colors.background)};
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  p {
    font-size: 0.71rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;
