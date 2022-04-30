interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
}

export interface ICategoryInputModel extends ICategory {}

export interface ICategoryOutputModel extends ICategory {}
