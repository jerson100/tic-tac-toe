import styled from "styled-components";
import { motion } from "framer-motion";

const BoardContainerStyle = styled(motion.div)`
  /* border: solid 1px red; */
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  row-gap: 1rem;
  column-gap: 1rem;
  margin-bottom: 1rem;
`;

export { BoardContainerStyle };
