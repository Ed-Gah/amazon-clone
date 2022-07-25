import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/stripe-js";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import React from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";

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
