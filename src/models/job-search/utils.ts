import { InterviewStage } from "./InterviewStages";

export const buildJob = (): InterviewStage[] => {
  return [
    {
      // All you need are soft skills & a great portfolio + resume
      name: "Phone Screen",
      didPass: () => Math.random() < 0.1,
    },
    {
      // Soft skills & decent verbal explanation skills, below average coding skills
      name: "Technical Phone Interview",
      didPass: () => Math.random() < 0.1,
    },
    {
      // Some soft skills, average-to-good coding skills
      name: "Whiteboard On Zoom",
      didPass: () => Math.random() < 0.6,
    },
    {
      // Depends
      name: "Final interview",
      didPass: () => Math.random() < 0.5,
    },
  ];
};
