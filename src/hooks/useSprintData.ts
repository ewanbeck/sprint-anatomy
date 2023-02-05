import data from "../assets/sprintData.json";
import { ComputedSprint } from "../types";
import { computeSprintData } from "../utils";

const useSprintData = (): ComputedSprint => computeSprintData(data);

export default useSprintData;
