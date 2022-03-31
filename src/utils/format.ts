export const formatMoney = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (value: Date): string => {
  return new Intl.DateTimeFormat("pt-BR").format(value);
};
