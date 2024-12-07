export const formatPrice = (price: number) => {
  const params = { maximumFractionDigits: 2, mininumFractionDigits: 2 };
  return new Intl.NumberFormat('pt-BR', params).format(price);
};
