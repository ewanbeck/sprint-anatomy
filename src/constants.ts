import { Task, TaskCategories } from "./types";

export const TASKS: Task[] = [
  {
    name: "Sprint Planning (Half Day)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Daily Standup (15 - 30 mins)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Admin",
    category: "PO",
    icons: { eye: false, list: false },
  },
  {
    name: "Dev & QA",
    category: "DEV_QA",
    icons: { eye: true, list: false },
  },
  {
    name: "Bug Fixes",
    category: "UAT",
    icons: { eye: false, list: false },
  },
  {
    name: "Managment Catch Up (30 mins)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Resourcing Review",
    category: "PO",
    icons: { eye: true, list: false },
  },
  {
    name: "Start Release Process",
    category: "CHOR",
    icons: { eye: true, list: true },
  },
  {
    name: "Managment Highlight Report(s)",
    category: "PO",
    icons: { eye: true, list: false },
  },
  {
    name: "Update Resourcing",
    category: "PO",
    icons: { eye: true, list: false },
  },
  {
    name: "Update Resourcing Reporting",
    category: "PO",
    icons: { eye: true, list: false },
  },
  {
    name: "Morning Catch Up",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Backlog Refinement & Pre Sprint Planning (1 hour)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Project Health Review (30 mins)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Backlog Refinement and Sprint Planning Follow Up (If Required)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Finalise Release",
    category: "CHOR",
    icons: { eye: true, list: false },
  },
  {
    name: "Retrospective (30 mins)",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Feature Demo & Handover",
    category: "PM",
    icons: { eye: true, list: false },
  },
  {
    name: "Deployment (To Live If Required)",
    category: "CHOR",
    icons: { eye: true, list: false },
  },
  {
    name: "Reporting Submission Deadline for Following Week",
    category: "CHOR",
    icons: { eye: false, list: false },
  },
  {
    name: "End of Sprint Deployment (Not To Live)",
    category: "MISL",
    icons: { eye: true, list: false },
  },
];

export const TASK_COLORS: TaskCategories = {
  PM: {
    backgroundColor: "#691FBE", // Purple
    hoverColor: "#5B1BA6",
    activeColor: "#461480",
    textColor: "light",
  },
  PO: {
    backgroundColor: "#DF7867", // Salmon
    hoverColor: "#C4685A",
    activeColor: "#9E5449",
    textColor: "light",
  },
  DEV_QA: {
    backgroundColor: "#5D6875", // Gray
    hoverColor: "#525C68",
    activeColor: "#3E464F",
    textColor: "light",
  },
  UAT: {
    backgroundColor: "#9C6666", // Brown
    hoverColor: "#825555",
    activeColor: "#694444",
    textColor: "light",
  },
  CHOR: {
    backgroundColor: "#E7C54A", // Yellow
    hoverColor: "#CFB042",
    activeColor: "#998231",
    textColor: "dark",
  },
  MISL: {
    backgroundColor: "#F0EFEA", // White
    hoverColor: "#D6D5D0",
    activeColor: "#A1A09C",
    textColor: "dark",
  },
};

export const DAY_KEYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export const SHORT_DAY_KEYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const WEEK_KEYS = ["Week1", "Week2"];

export const data = {
  Week1: {
    Monday: {
      tasks: [0, 2, 3, 4, 5],
      extraTasks: [18],
    },
    Tuesday: {
      tasks: [1, 2, 3, 4],
    },
    Wednesday: {
      tasks: [1, 2, 3, 4, 6],
    },
    Thursday: {
      tasks: [1, 2, 3, 4, 7],
    },
    Friday: {
      tasks: [1, 2, 3, 4, 8, 9, 10, 11],
      extraTasks: [19],
    },
  },
  Week2: {
    Monday: {
      tasks: [1, 2, 3, 4, 5],
    },
    Tuesday: {
      tasks: [1, 2, 3, 4, 12],
    },
    Wednesday: {
      tasks: [1, 2, 3, 4, 6],
    },
    Thursday: {
      tasks: [1, 2, 3, 4, 13, 14, 15],
    },
    Friday: {
      tasks: [1, 2, 8, 9, 10, 16, 17, 11],
      extraTasks: [20, 19],
    },
  },
};
