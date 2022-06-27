import { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

import { BaseSelect, IBaseSelectOption } from "../BaseSelect";

import { getAllCategoriesAsync } from "../../../services/categories.service";

interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  register: any;
  errors: FieldError | undefined;
}

export const CategoriesSelect: React.FC<IProps> = (props) => {
  const [options, setOptions] = useState<IBaseSelectOption[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data: apiResponse } = await getAllCategoriesAsync();

      setOptions(
        apiResponse.data.map((category) => ({
          value: category.id,
          label: category.name,
        }))
      );
    };

    fetch();
  }, []);

  return <BaseSelect defaultOptionLabel="Categoria" options={options} {...props} />;
};
