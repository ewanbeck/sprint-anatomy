import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledWeekContainer = styled(motion.div)`
  grid-area: week;
`;

export const StyledFiveColContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  column-gap: 2rem;
`;

export const StyledOverlapGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "week";
`;
