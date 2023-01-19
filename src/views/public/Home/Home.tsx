import React from "react";
import Board from "../../../components/common/Board";
import { HomeContainerStyle, HomeTitleStyle } from "./home.style";

const Home = () => {
  return (
    <HomeContainerStyle>
      <HomeTitleStyle>Tic tac toe</HomeTitleStyle>
      <Board />
    </HomeContainerStyle>
  );
};

export default Home;
