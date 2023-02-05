export type Day = {
  tasks: number[];
  extraTasks?: number[];
};

export type Week = {
  Monday: Day;
  Tuesday: Day;
  Wednesday: Day;
  Thursday: Day;
  Friday: Day;
};

export type Sprint = {
  Week1: Week;
  Week2: Week;
};

export type Task = {
  name: string;
  icons: IconOptions;
  category: keyof TaskCategories;
};

export interface ComputedTask extends Task {
  colors: TaskColorDefinitons;
}

export type IconOptions = {
  eye: boolean;
  list: boolean;
};

export type TaskCategories = {
  PM: TaskColorDefinitons;
  PO: TaskColorDefinitons;
  DEV_QA: TaskColorDefinitons;
  UAT: TaskColorDefinitons;
  CHOR: TaskColorDefinitons;
  MISL: TaskColorDefinitons;
};

export type TaskColorDefinitons = {
  backgroundColor: CSSStyleDeclaration["color"];
  hoverColor: CSSStyleDeclaration["color"];
  activeColor: CSSStyleDeclaration["color"];
  textColor: "dark" | "light";
};

export type ComputedDay = {
  tasks: ComputedTask[];
  extraTasks?: ComputedTask[];
};

export type ComputedWeek = {
  Monday: ComputedDay;
  Tuesday: ComputedDay;
  Wednesday: ComputedDay;
  Thursday: ComputedDay;
  Friday: ComputedDay;
};

export type ComputedSprint = {
  Week1: ComputedWeek;
  Week2: ComputedWeek;
};

export interface Theme {
  dark: ColourTheme;
  light: ColourTheme;
}

export type ColourTheme = {
  baseText: string;
  navButton: ButtonColourTheme;
  weekColumn: {
    bg: string;
    headerText: string;
    plusButton: ButtonColourTheme;
    boxShadow?: BoxShadowColourProperties;
    border?: string;
  };
  focusIndicator: string;
};

export type ButtonColourTheme = {
  text: string;
  textHover?: string;
  bg: string;
  bgHover: string;
  bgActive: string;
};

export type BoxShadowColourProperties = {
  colour?: string;
  transparency?: number;
};
