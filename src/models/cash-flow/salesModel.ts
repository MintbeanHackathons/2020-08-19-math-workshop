import { PayoutPeriod } from "./types";

const MIN_SALE = 10000;
const MAX_SALE = 100000;

export const calculateSales = (chanceOfSale = 0) => {
  const hasMadeSale = Math.random() * 100 < chanceOfSale;

  if (!hasMadeSale) return 0;

  const saleAmount = Math.random() * (MAX_SALE + MIN_SALE) - MIN_SALE;

  return Math.round(saleAmount);
};
