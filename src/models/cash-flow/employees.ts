import { Employee } from "./types";

const employeeUtil = (
  name: string,
  title: string,
  annualSalary: number
): Employee => ({
  name,
  title,
  annualSalary,
});

const employees: Employee[] = [
  employeeUtil("Daven Darkwood", "Master Assassin & CEO", 100000),
  employeeUtil("Mistress Evillaughter", "Assassin Trainer", 90000),
  employeeUtil("Hitamihar Dasyukan", "Senior Assassin", 70000),
  employeeUtil("Icanna Stanyofais", "Assassin", 60000),
  employeeUtil("Kant Yuthrowanyfe", "Junior Assassin", 30000),
  employeeUtil("Idon Wannadye", "Junior Assassin", 30000),
  employeeUtil("Imakep ritistuf", "Costume Designer", 35000),
];

export default employees;
