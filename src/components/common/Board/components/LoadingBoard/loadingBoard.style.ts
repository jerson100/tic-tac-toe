import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingBoardContainerStyle = styled(motion.div)`
  position: fixed;
  top: 1rem;
  left: 50%;
  border: solid 1px red;
  background-color: rgba(255, 0, 0, 0.2);
  transform: translateX(-50%);
  padding: 1rem;
  z-index: 2;
  p {
    font-size: 22px;
    color: white;
  }
`;
