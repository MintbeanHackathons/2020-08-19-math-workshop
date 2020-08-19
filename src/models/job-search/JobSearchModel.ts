import {
  FinalInterview,
  PhoneScreen,
  TakeHomeTest,
  WhiteboardChallenge,
  InterviewStage,
} from "./InterviewStages";

interface Result {
  totalStages: number;
  lastStageNumber: number;
  lastStage?: InterviewStage;
  gotJob: boolean;
}

// the main 'step' function that lets me calculate the next period
export const applyToJob = (stages: InterviewStage[]) => {
  let result: Result = null;

  for (let i = 0; i < stages.length; i++) {
    // for each stage, we need to know if we have passed.
    // if we failed, then stop.
    // if we passed, then great, try the next one.
    const currentStage = stages[i];
    const isPass = currentStage.didPass();
    if (isPass) {
      continue;
    } else {
      result = {
        totalStages: stages.length,
        lastStageNumber: i + 1,
        lastStage: currentStage,
        gotJob: false,
      };
      break;
    }
  }

  // GOT THE JOB!!!!
  if (result === null) {
    result = {
      totalStages: stages.length,
      lastStageNumber: stages.length,
      gotJob: true,
    };
  }

  return result;
};
