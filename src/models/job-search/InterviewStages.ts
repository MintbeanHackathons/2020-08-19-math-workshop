export interface InterviewStage {
  name: string;
  didPass: () => boolean;
}

export const PhoneScreen: InterviewStage = {
  name: "Phone Screen",
  didPass: () => Math.random() > 0.5,
};

export const TakeHomeTest: InterviewStage = {
  name: "Take Home Test",
  didPass: () => Math.random() > 0.5,
};

export const WhiteboardChallenge: InterviewStage = {
  name: "Whiteboard Challenge",
  didPass: () => Math.random() > 0.5,
};

export const FinalInterview: InterviewStage = {
  name: "Final Interview",
  didPass: () => Math.random() > 0.5,
};
