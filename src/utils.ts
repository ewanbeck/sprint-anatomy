import { cloneWith } from "lodash";

import { DAY_KEYS, TASKS, TASK_COLORS, WEEK_KEYS } from "./constants";
import { ComputedSprint, ComputedTask, Sprint, Week } from "./types";

export function computeSprintData(rawSprintData: Sprint): ComputedSprint {
  let computedSprint: any = cloneWith(rawSprintData);
  WEEK_KEYS.forEach((weekKey) => {
    DAY_KEYS.forEach((dayKey) => {
      const { tasks: rawTasks, extraTasks: rawExtraTasks = [] } =
        rawSprintData[weekKey as keyof Sprint][dayKey as keyof Week];

      computedSprint[weekKey][dayKey].tasks = rawTasks.map((task: number) =>
        addColorInfoToTask(task)
      );

      if (rawExtraTasks.length > 0) {
        computedSprint[weekKey][dayKey].extraTasks = rawExtraTasks.map(
          (task: number) => addColorInfoToTask(task)
        );
      }
    });
  });

  return computedSprint as ComputedSprint;
}

function addColorInfoToTask(taskIndex: number): ComputedTask {
  const { category } = TASKS[taskIndex];
  return {
    ...TASKS[taskIndex],
    colors: {
      ...TASK_COLORS[category],
    },
  };
}
