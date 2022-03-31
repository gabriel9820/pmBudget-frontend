import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Usuário é obrigatório")
    .max(200, "Usuário deve conter no máximo 100 caracteres"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .max(100, "Senha deve conter no máximo 100 caracteres"),
});

export interface ILoginFormFields {
  username: string;
  password: string;
}
