export enum PayoutPeriod {
  DAILY = 365, // there are 365 days in a year
  WEEKLY = 52, // there are 52 weeks in a year
  BIWEEKLY = 26, // there are 26 biweeky periods in a year
  MONTHLY = 12, // there are 12 months in a year
}

export interface Employee {
  name: string;
  title: string;
  annualSalary: number;
}

export interface PeriodizedEmployee {
  name: string;
  title: string;
  periodizedSalary: number;
}
