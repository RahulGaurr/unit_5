import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import "../App.css";

export const Login = () => {
  const navigate = useNavigate();
  //  use reqres to log user in.
  const { handleAuth } = useContext(AuthContext);
  const [cred, setCred] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/login", cred).then((res) => {
      res ? handleAuth(true) : "";
      navigate(-1);
      setCred({ username: "", password: "" });
    });
  };

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        value={cred.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
        value={cred.password}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
