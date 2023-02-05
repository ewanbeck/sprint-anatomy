import { useState } from "react";
import useSprintData from "./hooks/useSprintData";

import { ComputedSprint } from "./types";

import SprintWithTheme from "./components/sprintWithTheme";

const App = () => {
  const returnSprintData = useSprintData();
  const [sprintData, setSprintData] =
    useState<ComputedSprint>(returnSprintData);

  return <SprintWithTheme computedSprint={sprintData} />;
};

export default App;
