import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <div>
        {this.state.friendsList.map(friend => {
          return (
            <div>
              <h1>Name: {friend.name}</h1>
              <h1>Age: {friend.age}</h1>
              <h1>Email: {friend.email}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
