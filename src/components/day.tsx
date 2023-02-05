import {
  StyledTaskList,
  StyledDayColumn,
  StyledDayHeader,
  StyledPlusButton,
  StyledExtraTaskWrapper,
} from "../styled";
import { ComputedDay } from "../types";
import Task from "./task";
import isEmpty from "lodash/isEmpty";
import { useWindowSize } from "usehooks-ts";

type Props = {
  dayData: ComputedDay;
  dayName: string;
  shortDayName?: string;
  column: number;
};

const Day = (props: Props): [JSX.Element, JSX.Element | null] => {
  const { width } = useWindowSize();

  const {
    dayName,
    shortDayName,
    dayData: { tasks, extraTasks = [] },
    column
  } = props;

  return [
    <StyledDayColumn key={column}>
      <StyledDayHeader key={column+1}>
        {width >= 1166 ? dayName : shortDayName}
      </StyledDayHeader>
      <StyledPlusButton type="button" key={column+2}>
        <span className="material-icons-outlined">add</span>
      </StyledPlusButton>
      <StyledTaskList key={column+3}>
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index}/>
        ))}
      </StyledTaskList>
    </StyledDayColumn>,
    isEmpty(extraTasks) ? null : (
      <StyledExtraTaskWrapper column={column} key={column}>
        {extraTasks.map((task, index) => (
          <Task task={task} index={index} />
        ))}
      </StyledExtraTaskWrapper>
    ),
  ];
};

export default Day;
