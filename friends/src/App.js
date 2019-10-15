import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink className="nav" to="/login">
            Login
          </NavLink>
          <NavLink className="nav" to="/friends">
            Friends
          </NavLink>
        </nav>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
