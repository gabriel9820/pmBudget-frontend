import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
