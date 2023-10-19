import { useContext } from "react";
import { AuthContext } from "../Routers/AuthProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
