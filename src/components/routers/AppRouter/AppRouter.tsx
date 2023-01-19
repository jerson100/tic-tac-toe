import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../views/public/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
