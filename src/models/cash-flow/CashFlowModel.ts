import employees from "./employees";
import { calculateSales } from "./salesModel";
import { PayoutPeriod, PeriodizedEmployee } from "./types";

// the main 'step' function that lets me calculate the next period
export const step = (startingCash: number, periodType: PayoutPeriod) => {
  // 1: get everyone's PERIODIZED salaries.
  const salaries = employees.map(({ name, title, annualSalary }) => {
    // convert the annualSalary into a periodizedSalary
    const periodizedSalary = annualSalary / periodType;
    return { name, title, periodizedSalary };
  });

  // add the salaries up for the period
  let totalSalaries = 0;
  for (let i = 0; i < salaries.length; i++) {
    totalSalaries += salaries[i].periodizedSalary;
  }

  const totalSales = calculateSales(periodType);

  const endingCash = startingCash - totalSalaries + totalSales;

  return {
    startingCash,
    endingCash,
    totalSales,
    totalSalaries,
    salaries,
  };
};
