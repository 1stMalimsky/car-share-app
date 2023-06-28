import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Homepage from "../pages//Homepage/Homepage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Homepage />} />
    </Routes>
  );
};

export default Router;
