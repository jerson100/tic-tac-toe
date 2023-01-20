import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../views/public/Home";
import NotFound from "../../../views/public/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
