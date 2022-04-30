import * as yup from "yup";

export const categorySchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .max(200, "Nome deve conter no máximo 200 caracteres"),
  isActive: yup
    .bool()
    .required("Status é obrigatório")
    .typeError("Status é inválido"),
});

export interface ICategoryFormFields {
  name: string;
  isActive: boolean;
}
