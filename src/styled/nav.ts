import { motion } from "framer-motion";
import styled from "styled-components";

import { focusHighlight } from "./utils";

export const StyledNavButtonChevron = styled.span<{visible: boolean}>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: ease-in-out 500ms opacity;
`;

export const StyledNavContainer = styled.div`
  display: flex;
  place-items: center;
`;

export const StyledNav = styled(motion.nav)`
  display: flex;
  gap: 2rem;

  margin-bottom: 2rem;
`;

export const StyledNavButton = styled.button<{
  side: "left" | "right";
  active: boolean;
}>`
  padding: 2rem;
  flex-grow: 0;

  background-color: ${(props) => props.theme.navButton.bg};
  color: ${(props) => props.theme.navButton.text};
  font-size: 3rem;

  span.variablefont {
    font-family: "Rubik", sans-serif;
    transition: ease-in-out 500ms font-variation-settings;

    &.thick {
      font-variation-settings: "wght" 700;
    }

    &.thin {
      font-variation-settings: "wght" 300;
    }
  }

  width: ${(props) =>
    props.active
      ? "calc((( 100% - 8rem ) * 0.8 ) + 6rem)"
      : "calc(( 100% - 8rem ) * 0.2 )"};
  transition: width 500ms ease-in-out 60ms, background-color 200ms ease-in-out 0s;

  border-radius: 0.626rem;

  &:hover[data-active="false"] {
    background-color: ${(props) => props.theme.navButton.bgHover};
    cursor: ${(props) => (props.active ? "unset" : "pointer")};
  }

  &:active[data-active="false"] {
    background-color: ${(props) => props.theme.navButton.bgActive};
  }

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.active ? "" : focusHighlight(props.theme.focusIndicator)}
`;
