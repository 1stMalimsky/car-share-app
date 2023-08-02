import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import jwt_decode from "jwt-decode";
const useLogin = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const payload = await jwt_decode(token);
      const userId = payload.userId;
      await axios.get("/user/" + userId);
      dispatch(authActions.login(payload));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export default useLogin;