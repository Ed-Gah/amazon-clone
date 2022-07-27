import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/stripe-js";
import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";
import Checkout from "../src/pages/Checkout";
import Login from "../src/pages/Login";
import React from "react";
import { auth } from "./firebase";
import { useStateValue } from "../src/stateManagment/StateProvider";
import Payment from "../src/pages/Payment";
import Orders from "../src/pages/Orders";

//stripe api key.
const promise = loadStripe("");
function App() {
  const [{}, dispatch] = useStateValue();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("User is --> ", user);
      if (user) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        //the use is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //run once wen the app components runs
  }, [dispatch]);
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                {/* <Elements stripe={promise}> */}
                <Payment />
                {/* </Elements> */}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
