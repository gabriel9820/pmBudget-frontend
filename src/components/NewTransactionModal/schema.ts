import * as yup from "yup";
import { IBaseSelectOption } from "../Select/BaseSelect";

export const newTransactionSchema = yup.object().shape({
  date: yup
    .date()
    .required("Data é obrigatório")
    .typeError("Data deve ser uma data válida"),
  title: yup
    .string()
    .required("Título é obrigatório")
    .max(200, "Título deve conter no máximo 200 caracteres"),
  category: yup.string().required("Categoria é obrigatório"),
  value: yup
    .number()
    .required("Valor é obrigatório")
    .typeError("Valor deve ser numérico")
    .moreThan(0, "Valor deve ser maior que 0"),
});

export interface INewTransactionFormFields {
  date: Date;
  title: string;
  category: string;
  value: number;
}
