import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("access_token", "dummy_token");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div
      style={{
        border: "1px solid",
        height: "300px",
        width: "900px",
        marginLeft: "350px",
        backgroundColor: "#800080",
        borderRadius: "0px 30px 0px 30px",
        marginTop:"120px"

      }}
    >
      <div
        style={{
          border: "1px solid",
          height: "300px",
          marginLeft: "400px",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "30px 30px 0px 30px",
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "400px", height: "30px", borderRadius: "10px" }}
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />{" "}
          <br />
          <input
            style={{
              width: "400px",
              marginTop: "20px",
              height: "30px",
              borderRadius: "10px",
            }}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />{" "}
          <br />
          <button
            style={{
              marginTop: "20px",
              width: "90px",
              height: "30px",
              borderRadius: "10px",
              backgroundColor: "#800080",
              color: "white",
            }}
            type="submit"
          >
            Login
          </button>
          <p>
            Don't have an aacount? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
