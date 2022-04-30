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
import { getAllCategoriesAsync } from "../../services/categories.service";

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
  const [categories, setCategories] = useState<ICategoryOutputModel[]>([]);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(!false);

  useEffect(() => {
    const getAllCategories = async () => {
      const { data: apiResponse } = await getAllCategoriesAsync();
      setCategories(apiResponse.data);
    };

    getAllCategories();
  }, []);

  const editCategory = (data: ICategoryInputModel) => {
    console.log(data);
  };

  const deleteCategory = (data: ICategoryInputModel) => {
    console.log(data);
  };

  const handleOpenCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  return (
    <div>
      <PageTitle>Categorias</PageTitle>

      <Table
        columns={columns}
        data={categories}
        onEditClick={(data) => editCategory(data)}
        onDeleteClick={(data) => deleteCategory(data)}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onRequestClose={handleCloseCategoryModal}
      />
    </div>
  );
};
