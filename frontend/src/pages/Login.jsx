import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    const adminEmail =
      "admin@gmail.com";

    const adminPassword =
      "admin123";

    if (
      email === adminEmail &&
      password === adminPassword
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert(
        "Login Successful"
      );

      navigate("/dashboard");
    } else {
      alert(
        "Invalid Credentials"
      );
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        backgroundColor:
          "#f4f4f4",
      }}
    >
      <div
        style={{
          background:
            "white",
          padding: "40px",
          borderRadius:
            "10px",
          boxShadow:
            "0px 0px 10px rgba(0,0,0,0.2)",
          width: "350px",
        }}
      >
        <h1
          style={{
            textAlign:
              "center",
          }}
        >
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding:
              "10px",
            marginTop:
              "20px",
            marginBottom:
              "15px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding:
              "10px",
            marginBottom:
              "20px",
          }}
        />

        <button
          onClick={
            handleLogin
          }
          style={{
            width: "100%",
            padding:
              "10px",
            backgroundColor:
              "#007bff",
            color:
              "white",
            border:
              "none",
            borderRadius:
              "5px",
            cursor:
              "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop:
              "15px",
            fontSize:
              "14px",
            color:
              "gray",
          }}
        >
          Email:
          admin@gmail.com
          <br />
          Password:
          admin123
        </p>
      </div>
    </div>
  );
}

export default Login;