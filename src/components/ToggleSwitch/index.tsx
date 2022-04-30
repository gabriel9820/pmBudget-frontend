import { FieldError } from "react-hook-form";

import {
  Container,
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchSlider,
} from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errors: FieldError | undefined;
  label: string;
}

export const ToggleSwitch: React.FC<IProps> = ({ register, errors, label }) => {
  return (
    <Container>
      <label>{label}</label>
      <Switch>
        <SwitchLabel>
          <SwitchInput {...register} type="checkbox" />
          <SwitchSlider />
        </SwitchLabel>
        <p>{errors?.message}</p>
      </Switch>
    </Container>
  );
};
