import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface ITransactionTypeButtonProps {
  isActive: boolean;
  buttonType: "income" | "expense";
}

export const TransactionTypeButton = styled.button<ITransactionTypeButtonProps>`
  height: 4rem;
  border: ${({ theme, ...props }) =>
    `1px solid ${
      props.buttonType === "income" ? theme.colors.green : theme.colors.red
    }`};
  border-radius: 0.25rem;
  background: ${({ theme, ...props }) =>
    props.isActive
      ? transparentize(
          0.8,
          props.buttonType === "income" ? theme.colors.green : theme.colors.red
        )
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme, ...props }) =>
      darken(
        0.2,
        props.buttonType === "income" ? theme.colors.green : theme.colors.red
      )};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
