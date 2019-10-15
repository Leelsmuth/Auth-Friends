import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import "./App.css";

function App(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace("/");
  };
  return (
    <div className="App">
      <nav>
        <span>
          <NavLink className="nav" exact to="/">
            Login
          </NavLink>
          <NavLink className="nav" to="/friends">
            Friends
          </NavLink>
          <NavLink className="nav" to="/addFriend">
            AddFriend
          </NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} /> &nbsp;
        <Route
          exact
          path="/addFriend"
          render={props => withAthCheck(AddFriend, props)}
        />
        {/* (OPTION B) Create a secure Route for Quotes.
        Alternatively, we could have the Quotes component
        itself handle the redirect if no token. */}
        <Route
          exact
          path="/friends"
          render={props => withAthCheck(FriendsList, props)}
        />
      </main>
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(App);
