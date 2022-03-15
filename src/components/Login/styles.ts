import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 25%;
  color: ${({ theme }) => theme.colors.textPrimary};

  img {
    width: 23rem;
    margin-bottom: 3rem;
  }

  & > span {
    float: right;
    font-size: 0.8rem;
    cursor: pointer;
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
    }
  }
`;
