import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const HomeTitleStyle = styled(motion.h1)`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.PRIMARY};
  margin-bottom: 1rem;
  text-align: center;
`;

export { HomeContainerStyle, HomeTitleStyle };
