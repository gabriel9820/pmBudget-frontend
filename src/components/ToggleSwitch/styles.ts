import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;

  label {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Switch = styled.div`
  display: flex;

  p {
    font-size: 0.71rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: auto;
  cursor: pointer;
`;

export const SwitchSlider = styled.div`
  position: relative;
  width: 3.5rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1rem;
  padding: 1rem;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1rem;
    top: 50%;
    left: 0.2rem;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(0, -50%);
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchSlider} {
    background: ${({ theme }) => theme.colors.secondary};

    &:before {
      transform: translate(1.5rem, -50%);
    }
  }
`;
