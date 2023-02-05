import styled from "styled-components";
import { TaskColorDefinitons } from "../types";
import { rem } from "./utils";

export const StyledTaskList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const StyledTask = styled.div<TaskColorDefinitons>`
  border-radius: ${rem(0.4)};

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor};
  
  color: ${(props) => (props.textColor === "dark" ? "#2c2c2c" : "white")};
  font-size: 2rem;
  font-weight: 700;
  
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  > span {
    height: 3rem;
  }
`;
