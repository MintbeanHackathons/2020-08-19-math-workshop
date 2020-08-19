import React from "react";
import { buildJob } from "./utils";
import { applyToJob } from "./JobSearchModel";

const job = buildJob();

const results = [];
do {
  results.push(applyToJob(job));
} while (results[results.length - 1].gotJob === false)


export default () => {
  return (
    <div>
      <h1>Job Search</h1>
      It took {results.length} applications to get a job!
    </div>
  );
};
