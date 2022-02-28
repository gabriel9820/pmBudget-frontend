import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 12rem;
  }

  button {
    font-size: 1rem;
    color: var(--white);
    background: var(--secondary);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
