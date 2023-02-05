import { StyledTask, StyledIconContainer } from "../styled";
import { ComputedTask } from "../types";

type Props = {
  task: ComputedTask;
  index: number;
};

const Task = (props: Props) => {
  const {
    task: {
      name,
      colors: { textColor, backgroundColor, hoverColor, activeColor },
      icons: { list: showListIcon, eye: showEyeIcon },
    },
    index,
  } = props;

  return (
    <StyledTask
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
      textColor={textColor}
      key={index}
    >
      {name}
      <StyledIconContainer>
        {showListIcon && <span className="material-icons-outlined">sort</span>}
        {showEyeIcon && (
          <span className="material-icons-outlined">visibility</span>
        )}
      </StyledIconContainer>
    </StyledTask>
  );
};

export default Task;
