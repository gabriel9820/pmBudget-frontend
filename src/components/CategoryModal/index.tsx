import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";
import { CustomModal } from "../CustomModal";
import { CustomInput } from "../CustomInput";
import { ToggleSwitch } from "../ToggleSwitch";
import { Button } from "../Button";

import { ICategoryFormFields, categorySchema } from "./schema";
import { apiExceptionHandler } from "../../utils/exception-handler";
import { createCategoryAsync } from "../../services/categories.service";

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const CategoryModal: React.FC<IProps> = ({ isOpen, onRequestClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ICategoryFormFields>({
    resolver: yupResolver(categorySchema),
    defaultValues: {
      isActive: true,
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleCreateCategory = async (data: any) => {
    try {
      const category = { ...data };

      await createCategoryAsync(category);

      onRequestClose();
    } catch (error) {
      apiExceptionHandler(error);
    }
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container onSubmit={handleSubmit(handleCreateCategory)}>
        <h2>Cadastrar Categoria</h2>

        <CustomInput
          register={register("name")}
          errors={errors.name}
          placeholder="Nome"
        />

        <ToggleSwitch
          register={register("isActive")}
          errors={errors.isActive}
          label="Ativo"
        />

        <Button>Cadastrar</Button>
      </Container>
    </CustomModal>
  );
};
