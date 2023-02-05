import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavButton from "./navButton";

import {
  StyledMainContainer,
  StyledNav,
  StyledOverlapGrid,
  StyledWeekContainer,
} from "../styled";

import { ComputedSprint } from "../types";
import Week from "./week";

const week1Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: "calc(-60% - 1rem)" },
};

const week2Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: "calc(60% + 1rem)" },
};

export type SprintProps = {
  computedSprint: ComputedSprint;
};

const Sprint = (props: SprintProps) => {
  const [showWeek1, setShowWeek1] = useState<boolean>(true);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const { Week1, Week2 } = props.computedSprint;

  return (
    <StyledMainContainer>
      <StyledNav>
        <NavButton
          active={showWeek1}
          side="left"
          buttonText="Week One"
          onClickFn={() => setShowWeek1(true)}
        />
        <NavButton
          active={!showWeek1}
          side="right"
          buttonText="Week Two"
          onClickFn={() => {
            setFirstRender(false);
            setShowWeek1(false);
          }}
        />
      </StyledNav>
      <StyledOverlapGrid>
        <AnimatePresence>
          {showWeek1 && (
            <StyledWeekContainer
              variants={week1Variants}
              initial={firstRender ? false : "hidden"}
              animate="visible"
              exit="hidden"
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            >
              <Week weekData={Week1} />
            </StyledWeekContainer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!showWeek1 && (
            <StyledWeekContainer
              variants={week2Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            >
              <Week weekData={Week2} />
            </StyledWeekContainer>
          )}
        </AnimatePresence>
      </StyledOverlapGrid>
    </StyledMainContainer>
  );
};

export default Sprint;
