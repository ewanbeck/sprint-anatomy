import styled from "styled-components";
import { rem, boxShadow } from "./utils";

export const StyledDayColumn = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.weekColumn.bg};
  ${(props) => props.theme.weekColumn.boxShadow &&
    boxShadow({
      xOffset: 0.5,
      yOffset: 0.5,
      blur: 0.7,
      spread: 0.1,
      colour: props.theme.weekColumn.boxShadow.colour,
      transparency: props.theme.weekColumn.boxShadow.transparency,
    })};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  border-radius: ${rem(0.625)};
  ${(props) => props.theme.weekColumn.border && `border: ${props.theme.weekColumn.border}`}
  ;
`;

export const StyledDayHeader = styled.h2`
  color: ${(props) => props.theme.weekColumn.headerText};
  font-weight: 600;
  font-size: 2.5rem;
  margin: 1rem 0rem 2rem;
  font-family: "Rubik", sans-serif;
  font-variation-settings: "wght" 520;
`;
