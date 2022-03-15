import { FieldError } from "react-hook-form";

import { Container } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errors: FieldError | undefined;
}

export const CustomInput: React.FC<IProps> = ({
  register,
  errors,
  ...props
}) => {
  return (
    <Container>
      <input {...register} {...props} />
      <p>{errors?.message}</p>
    </Container>
  );
};
