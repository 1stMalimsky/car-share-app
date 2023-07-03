import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Homepage from "../pages//Homepage/Homepage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Homepage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
