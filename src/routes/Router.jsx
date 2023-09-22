import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CarInventoryPage from "../pages/CarInventoryPage";
import AboutPage from "../pages/AboutPage";
import OurCarsPage from "../pages/OurCarsPage";
import CheckoutPage from "../pages/CheckoutPage";
import AdminControls from "../pages/AdminControls";
import MyCars from "../pages/MyCars";
import LogoutRoute from "../components/LogoutRoute";
import LogoutLink from "../components/LogoutLink";
import EditCarPage from "../pages/EditCarPage";
import ProfilePage from "../pages/ProfilePage";
import AddNewCarPage from "../pages/AddNewCarPage";
import LikedCarsPage from "../pages/LikedCarsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Homepage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={"/car-inv/:start/:end/"} element={<CarInventoryPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.OURCARS} element={<OurCarsPage />} />
      <Route path={ROUTES.MYCARS} element={<MyCars />} />
      <Route path={"/edit/:id"} element={<EditCarPage />} />
      <Route
        path={"/checkout/:id/:start/:end/:numOfDays"}
        element={<CheckoutPage />}
      />
      <Route path={ROUTES.LIKEDCARS} element={<LikedCarsPage />} />
      <Route path={ROUTES.ADDCAR} element={<AddNewCarPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.ADMIN} element={<AdminControls />} />
      <Route
        path={ROUTES.LOGOUT}
        element={<LogoutRoute element={<LogoutLink />} />}
      />
    </Routes>
  );
};

export default Router;
