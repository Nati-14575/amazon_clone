import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("User:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_LOGGED_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_LOGGED_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route />
      </div>
    </Router>
  );
}

export default App;
