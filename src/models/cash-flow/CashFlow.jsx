import React from "react";
import { step } from "./CashFlowModel";
import { PayoutPeriod } from "./types";
const PERIOD_TYPE = PayoutPeriod.BIWEEKLY;

const STARTING_CASH = 100000;

const periods = [];

// generate 1st period
periods.push(step(STARTING_CASH, PERIOD_TYPE));

// generate subsequent periods
for (var i = 1; i < 100; i++) {
  const previousCash = periods[i - 1].endingCash;
  periods.push(step(previousCash, PERIOD_TYPE));
}

// bankrupt in:
let bankruptPeriodNumber = null;
for (var i = 0; i < periods.length; i++) {
  if (periods[i].endingCash <= 0) {
    bankruptPeriodNumber = i;
    break;
  }
}

let bankruptNotification = "";
if (bankruptPeriodNumber === null) {
  bankruptNotification = "Never went bankrupt!";
} else {
  bankruptNotification = "Went bankrupt in " + bankruptPeriodNumber + " periods.";
}

export default () => {
  return (
    <div>
      <h1>Cash Flow</h1>
      <p>{bankruptNotification}</p>
      <div>
        {periods.map((p, i) => (
          <div key={i}>
            <div className="period">
              <h1>Biweekly Period # {i}</h1>
              <p>Starting Cash: ${Math.round(p.startingCash)}</p>
              <p>Total Salaries: ${Math.round(p.totalSalaries)}</p>
              <p>Total Sales: ${Math.round(p.totalSales)}</p>
              <p>Ending Cash: ${Math.round(p.endingCash)}</p>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
