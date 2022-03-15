import styled from "styled-components";

interface IProps {
  isMenuOpen: boolean;
}

export const Content = styled.div<IProps>`
  margin-left: ${(props) => (props.isMenuOpen ? "17rem" : "4.5rem")};
  transition: margin-left 0.4s;
  padding: 3rem;
`;
