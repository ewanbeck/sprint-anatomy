import styled from "styled-components";
import { rem, boxShadow, focusHighlight } from "./utils";

export const StyledPlusButton = styled.button`
  position: absolute;
  top: ${rem()};
  left: ${rem()};

  min-width: 5rem;
  aspect-ratio: 1;
  ${(props) =>
    boxShadow({
      xOffset: 0,
      yOffset: 0,
      blur: 0.7,
      spread: 0.275,
      colour: props.theme.focusIndicator,
      transparency: 0.1,
    })};

  border: none;
  background-color: ${(props) => props.theme.weekColumn.plusButton.bg};
  color: ${(props) => props.theme.weekColumn.plusButton.text};
  border-radius: 50%;

  cursor: pointer;
  transition: ease-in-out 100ms background-color;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.weekColumn.plusButton.bgHover};
  }

  &:active {
    background-color: ${(props) => props.theme.weekColumn.plusButton.bgActive};
  }

  ${(props) => focusHighlight(props.theme.focusIndicator)};
`;
