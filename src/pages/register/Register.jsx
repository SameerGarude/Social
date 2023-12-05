import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs,
        "User has been created"
      );
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Face Book.</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
          <span>Do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />

            {err && err}

            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
