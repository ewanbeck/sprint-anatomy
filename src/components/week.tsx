import { DAY_KEYS, SHORT_DAY_KEYS } from "../constants";
import { StyledFiveColContainer } from "../styled";
import { ComputedWeek } from "../types";

import Day from "./day";

type Props = {
  weekData: ComputedWeek;
};

const Week = ({ weekData }: Props) => {
  let dayColumns: JSX.Element[] = [];
  let extraTaskColumns: JSX.Element[] = [];

  DAY_KEYS.forEach((dayName, i) => {
    const [day, extraTask] = Day({
      dayData: weekData[dayName as keyof ComputedWeek],
      dayName,
      shortDayName: SHORT_DAY_KEYS[i],
      column: i + 1
    });
    dayColumns.push(day);
    extraTask && extraTaskColumns.push(extraTask);
  });

  return (
    <>
      <StyledFiveColContainer>{dayColumns}</StyledFiveColContainer>
      <StyledFiveColContainer>{extraTaskColumns}</StyledFiveColContainer>
    </>
  );
};

export default Week;
