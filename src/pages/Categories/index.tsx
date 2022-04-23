import { useEffect, useState } from "react";
import { Column } from "react-table";

import { PageTitle } from "../../components/PageTitle";
import { Table } from "../../components/Table";

import { ICategoryOutputModel } from "../../models/category.model";
import { getAllCategoriesAsync } from "../../services/categories.service";

const columns: Column<ICategoryOutputModel>[] = [
  {
    Header: "Nome",
    accessor: "name",
  },
];

export const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategoryOutputModel[]>([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const { data: apiResponse } = await getAllCategoriesAsync();
      setCategories(apiResponse.data);
    };

    getAllCategories();
  }, []);

  return (
    <div>
      <PageTitle>Categorias</PageTitle>
      <Table columns={columns} data={categories} />
    </div>
  );
};
