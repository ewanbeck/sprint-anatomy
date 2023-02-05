import { ThemeProvider } from "styled-components";
import useSystemTheme from "../hooks/useSystemTheme";

import Sprint, { SprintProps } from "./sprint";
import { THEME } from '../styled/colours';

const SprintWithTheme = (props: SprintProps) => {
  const systemTheme = useSystemTheme();

  return (
    <ThemeProvider theme={THEME[systemTheme]}>
        <Sprint computedSprint={props.computedSprint} />
    </ThemeProvider>
  )
};

export default SprintWithTheme;
