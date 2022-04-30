import * as yup from "yup";

export const newTransactionSchema = yup.object().shape({
  date: yup
    .date()
    .required("Data é obrigatório")
    .typeError("Data deve ser uma data válida"),
  title: yup
    .string()
    .required("Título é obrigatório")
    .max(200, "Título deve conter no máximo 200 caracteres"),
  value: yup
    .number()
    .required("Valor é obrigatório")
    .typeError("Valor deve ser numérico")
    .moreThan(0, "Valor deve ser maior que 0"),
  category: yup
    .string()
    .required("Categoria é obrigatório")
    .max(100, "Categoria deve conter no máximo 100 caracteres"),
});

export interface INewTransactionFormFields {
  date: Date;
  title: string;
  value: number;
  category: string;
}
