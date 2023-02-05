import styled from "styled-components";
import { StyledTaskList } from "./task";
import { rem } from "./utils";

export const StyledExtraTaskWrapper = styled(StyledTaskList)<{column: number}>`
  background-color: transparent;
  padding: 1rem;
  padding-top: ${rem(1.4)};

  grid-column: ${(props) => props.column};
`;
