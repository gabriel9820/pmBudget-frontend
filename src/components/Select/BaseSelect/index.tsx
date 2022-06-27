import { FieldError } from "react-hook-form";

import { Container } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  register: any;
  errors: FieldError | undefined;
  options: IBaseSelectOption[];
  defaultOptionLabel?: string;
}

export interface IBaseSelectOption {
  value: number;
  label: string;
}

export const BaseSelect: React.FC<IProps> = ({
  register,
  errors,
  options,
  defaultOptionLabel,
  ...props
}) => {
  return (
    <Container>
      <select {...register} defaultValue="" {...props}>
        <option disabled value="">
          {`Selecione uma ${defaultOptionLabel || "opção"}`}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>{errors?.message}</p>
    </Container>
  );
};
