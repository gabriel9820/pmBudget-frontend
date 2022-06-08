import styled from "styled-components";

interface IProps {
  fullWidth?: boolean;
}

export const Container = styled.button<IProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 0 1.5rem;
  height: ${({ fullWidth }) => (fullWidth ? "4rem" : "3rem")};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 0.25rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover,
  &:focus {
    filter: brightness(0.9);
  }
`;
