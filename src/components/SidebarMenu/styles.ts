import styled from "styled-components";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Container = styled.div<IMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isMenuOpen ? "17rem" : "5rem")};
  height: 100%;
  z-index: 98;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  font-size: 0.95rem;
  transition: width 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    list-style: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 1rem;

  img {
    width: 10rem;
  }

  svg {
    font-size: 1.7rem;
    margin-left: 0.6rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
  }
`;

export const Footer = styled.footer``;
