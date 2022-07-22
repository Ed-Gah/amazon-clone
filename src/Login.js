import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (e) => {
    e.preventDefault();
    // Some firebase login
  };

  const register = async (e) => {
    e.preventDefault();
    // Some firebase

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          console.log("User created Successfully ", res);
          setEmail("");
          setPassword("");
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="..."
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signin-in you agree to the Amazon Fake Clone condition of use &
          sale. Please see our privacy notice, our coookies notice and our
          interest-based Ads notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Acount
        </button>
      </div>
    </div>
  );
}

export default Login;
