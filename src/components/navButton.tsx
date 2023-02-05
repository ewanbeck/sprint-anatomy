import { useRef } from 'react'
import classnames from "classnames";
import { StyledNavButton, StyledNavButtonChevron } from "../styled";

type Props = {
  active: boolean;
  buttonText: string;
  onClickFn: Function;
  side: "left" | "right";
};

const NavButton = (props: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { active, side, onClickFn, buttonText } = props;

  return (
    <StyledNavButton
      active={active}
      data-active={active}
      onClick={() => {
        buttonRef.current && buttonRef.current.blur()
        onClickFn()
      }}
      ref={buttonRef}
      side={side}
      tabIndex={active ? -1 : 0}
      type="button"
    >
      {side === "left" ? (
        <StyledNavButtonChevron
          visible={!active}
          className="material-icons-outlined"
        >
          chevron_left
        </StyledNavButtonChevron>
      ) : (
        <span>&nbsp;</span>
      )}
      <span className={classnames("variablefont", active ? "thick" : "thin")}>
        {buttonText}
      </span>
      {side === "right" ? (
        <StyledNavButtonChevron
          visible={!active}
          className="material-icons-outlined"
        >
          chevron_right
        </StyledNavButtonChevron>
      ) : (
        <span>&nbsp;</span>
      )}
    </StyledNavButton>
  );
};

export default NavButton;
