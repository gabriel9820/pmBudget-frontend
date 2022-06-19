interface ICategory {
  name: string;
  isActive: boolean;
}

export interface ICategoryInputModel extends ICategory {
  id: number | undefined;
}

export interface ICategoryOutputModel extends ICategory {
  id: number;
}
