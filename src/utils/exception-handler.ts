export const apiExceptionHandler = (error: any) => {
  const message =
    error?.response?.data?.message || error?.message || "Ocorreu um erro";

  const errors = error?.response?.data?.errors || undefined;

  console.log({ message, errors });
};
