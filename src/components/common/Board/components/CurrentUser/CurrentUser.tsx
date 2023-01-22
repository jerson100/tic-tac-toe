import { CurrentUserProps } from "../../../../../types";
import { CurrentUserContainerStyle } from "./currentUser.style";
import { motion } from "framer-motion";
import { winnerVariants } from "./currentUser.variants";

const CurrentUser = ({ current, winner }: CurrentUserProps) => {
  return (
    <CurrentUserContainerStyle>
      <p>
        turno: <span>{current}</span>
      </p>
      {winner && (
        <motion.p initial="hidden" animate="animate" variants={winnerVariants}>
          Ganador: <span>{winner}</span>
        </motion.p>
      )}
    </CurrentUserContainerStyle>
  );
};

export default CurrentUser;
