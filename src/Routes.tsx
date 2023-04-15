import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./Pages/HomeView";
import MovieDetail from "./Pages/MovieDetail";
import PageNotFound from "./Pages/PageNotFound";
const MainRoutes = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
