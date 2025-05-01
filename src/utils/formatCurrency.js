export const formatCurrency = (value) => {
  if (!value) return "-";
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
