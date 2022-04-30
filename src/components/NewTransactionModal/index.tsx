import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import income from "../../assets/income.svg";
import expense from "../../assets/expense.svg";

import {
  Container,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles";
import { CustomModal } from "../CustomModal";
import { CustomInput } from "../CustomInput";
import { Button } from "../Button";

import { INewTransactionFormFields, newTransactionSchema } from "./schema";
import { createTransactionAsync } from "../../services/transactions.service";
import { apiExceptionHandler } from "../../utils/exception-handler";

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<IProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<INewTransactionFormFields>({
    resolver: yupResolver(newTransactionSchema),
  });
  const [type, setType] = useState("income");

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleCreateNewTransaction = async (data: any) => {
    try {
      const transaction = {
        ...data,
        type: type === "income" ? 1 : 2,
      };

      await createTransactionAsync(transaction);

      onRequestClose();
    } catch (error) {
      apiExceptionHandler(error);
    }
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Cadastrar Transação</h2>

        <CustomInput
          register={register("date")}
          errors={errors.date}
          placeholder="Data"
          type="date"
        />

        <CustomInput
          register={register("title")}
          errors={errors.title}
          placeholder="Título"
        />

        <CustomInput
          register={register("value")}
          errors={errors.value}
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            buttonType="income"
            isActive={type === "income"}
            onClick={() => setType("income")}
          >
            <img src={income} alt="Receita" />
            <span>Receita</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            buttonType="expense"
            isActive={type === "expense"}
            onClick={() => setType("expense")}
          >
            <img src={expense} alt="Despesa" />
            <span>Despesa</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <CustomInput
          register={register("category")}
          errors={errors.category}
          placeholder="Categoria"
        />

        <Button>Cadastrar</Button>
      </Container>
    </CustomModal>
  );
};
