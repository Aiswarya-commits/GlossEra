import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;

    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, password, confirm_password })
    );
    localStorage.setItem("access_token", "dummy_token");
    navigate("/home");
  };

  return (
    <div
      style={{
        border: "1px solid",
        height: "400px",
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
          height: "400px",
          marginLeft: "400px",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "30px 30px 0px 30px",
        }}
      >
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "400px", height: "30px", borderRadius: "10px" }}
            type="text"
            name="username"
            placeholder="Username"
          />{" "}
          <br />
          <input
            style={{
              width: "400px",
              marginTop: "20px",
              height: "30px",
              borderRadius: "10px",
            }}
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
          <input
            style={{
              width: "400px",
              marginTop: "20px",
              height: "30px",
              borderRadius: "10px",
            }}
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
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
            Register
          </button>
          <p>
            Already have an Account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
