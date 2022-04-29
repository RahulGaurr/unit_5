import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const { isAuth } = useContext(AuthContext);
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  handleAuth(false);
  navigate(-1);
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};
