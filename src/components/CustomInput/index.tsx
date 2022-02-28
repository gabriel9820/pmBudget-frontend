import { FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

import { Container } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errors: FieldError | undefined;
}

export const CustomInput: FC<IProps> = ({ register, errors, ...props }) => {
  return (
    <Container>
      <input {...register} {...props} />
      <p>{errors?.message}</p>
    </Container>
  );
};
