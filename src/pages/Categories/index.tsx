import { useEffect, useState } from "react";
import { Column } from "react-table";

import { PageTitle } from "../../components/PageTitle";
import { Table } from "../../components/Table";
import { StatusCell } from "../../components/Table/StatusCell";
import { CategoryModal } from "../../components/CategoryModal";

import {
  ICategoryInputModel,
  ICategoryOutputModel,
} from "../../models/category.model";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../store";
import { deleteCategoryById, getAllCategories } from "../../store/categories/actions";

const columns: Column<ICategoryOutputModel>[] = [
  {
    Header: "Nome",
    accessor: "name",
  },
  {
    Header: "Status",
    accessor: "isActive",
    Cell: ({ value }) => {
      return <StatusCell>{value}</StatusCell>;
    },
  },
];

export const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector((state: AppState) => state.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<ICategoryOutputModel>();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const editCategory = (data: ICategoryInputModel) => {
    setEditItem(data);
    handleOpenModal();
  };

  const deleteCategory = (data: ICategoryInputModel) => {
    dispatch(deleteCategoryById(data.id))
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(undefined);
  };

  return (
    <div>
      <PageTitle onNewClick={handleOpenModal}>Categorias</PageTitle>

      <Table
        columns={columns}
        data={categories}
        onEditClick={(data) => editCategory(data)}
        onDeleteClick={(data) => deleteCategory(data)}
      />

      <CategoryModal
        isOpen={isModalOpen}
        data={editItem}
        onRequestClose={handleCloseModal}
      />
    </div>
  );
};
