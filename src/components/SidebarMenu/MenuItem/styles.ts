import { transparentize } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.4rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  svg {
    font-size: 1.7rem;
  }

  span {
    margin-left: 1rem;
  }
`;

export const ContainerSubItem = styled.ul`
  margin-left: 1.4rem;
  border-left: 1px solid
    ${({ theme }) => transparentize(0.85, theme.colors.textPrimary)};
  border-radius: 0.25rem;

  &.menu-condensed {
    position: absolute;
    left: 100%;
    top: 0;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubItem = styled(Link)`
  display: flex;
  align-items: top;
  padding: 0.6rem 0.4rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-left: 2.4rem;
  font-size: 0.85rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &.menu-condensed {
    margin: 0;
    padding: 0.6rem 2rem;
    white-space: nowrap;
  }
`;
