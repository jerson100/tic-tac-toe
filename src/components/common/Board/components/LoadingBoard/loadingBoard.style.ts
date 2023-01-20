import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingBoardContainerStyle = styled(motion.div)`
  position: fixed;
  top: 1rem;
  left: 50%;
  border: solid 1px red;
  background-color: rgba(255, 0, 0, 0.2);
  transform: translateX(-50%);
  padding: 0.8rem 1rem;
  min-width: 160px;
  z-index: 2;
  border-radius: 5px;
  p {
    font-size: 20px;
    text-align: center;
    color: white;
  }
`;
