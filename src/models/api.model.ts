export interface IApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors: string[];
}
