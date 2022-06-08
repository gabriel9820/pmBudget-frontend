import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";
import { CustomModal } from "../CustomModal";
import { CustomInput } from "../CustomInput";
import { ToggleSwitch } from "../ToggleSwitch";
import { Button } from "../Button";

import { ICategoryFormFields, categorySchema } from "./schema";
import { useAppDispatch } from "../../store";
import { createCategory, updateCategory } from "../../store/categories/actions";
import { ICategoryOutputModel } from "../../models/category.model";

interface IProps {
  isOpen: boolean;
  data: ICategoryOutputModel | undefined;
  onRequestClose: () => void;
}

export const CategoryModal: React.FC<IProps> = ({
  isOpen,
  data,
  onRequestClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategoryFormFields>({
    resolver: yupResolver(categorySchema),
    defaultValues: {
      isActive: true,
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const handleCloseModal = () => {
    reset({ isActive: true });
    onRequestClose();
  };

  const handleSubmitCategory = async (data: ICategoryFormFields) => {
    const category = { ...data };

    category.id
      ? dispatch(updateCategory(category))
      : dispatch(createCategory(category));

    handleCloseModal();
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <Container onSubmit={handleSubmit(handleSubmitCategory)}>
        <h2>Categoria</h2>

        <CustomInput
          register={register("id")}
          errors={errors.id}
          placeholder="ID"
          readOnly
        />

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

        <Button fullWidth>Salvar</Button>
      </Container>
    </CustomModal>
  );
};
