import hexToRgba from "hex-to-rgba";

const rem = (factor: number = 1) => `${1 * factor}rem`;

type BoxShadowProps = {
  colour?: string;
  transparency?: number;
  xOffset?: number;
  yOffset?: number;
  spread?: number;
  blur?: number;
};

const boxShadow = (props: BoxShadowProps): string => {
  const {
    colour = "#ffffff",
    transparency = 1,
    xOffset = 0.5,
    yOffset = 0.5,
    blur = 1,
    spread = 1,
  } = props;
  return `box-shadow: ${rem(xOffset)} ${rem(yOffset)} ${rem(blur)} ${rem(
    spread
  )} ${hexToRgba(colour, transparency)}`;
};

const focusHighlight = (focusIndicatorColour: string = "#ffffff") => {
  return `
    &:focus-within {
      outline: ${focusIndicatorColour} solid 2px;
      outline-offset: 2px;
    }
  `;
};

export { rem, boxShadow, focusHighlight };
