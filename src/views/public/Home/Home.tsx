import Board from "../../../components/common/Board";
import { HomeContainerStyle, HomeTitleStyle } from "./home.style";
import { homeVariants } from "./homeVariants";

const Home = () => {
  return (
    <HomeContainerStyle>
      <HomeTitleStyle
        initial="hidden"
        animate="show"
        exit="exit"
        variants={homeVariants}
      >
        Tic tac toe
      </HomeTitleStyle>
      <Board />
    </HomeContainerStyle>
  );
};

export default Home;
