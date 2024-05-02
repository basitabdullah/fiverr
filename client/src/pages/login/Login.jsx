import React, { useState } from "react";
import "../login/Login.scss";
import newRequest from "../../utils/newRequest";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await  newRequest.post("auth/login",{
        username,password
      })
      localStorage.setItem("currentUser" , JSON.stringify(res.data))
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder=" Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
