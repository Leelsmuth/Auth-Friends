import React, { useRef } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function AddFriend(props) {
  const friendNameRef = useRef();
  const friendAgeRef = useRef();
  const friendEmailRef = useRef();

  const submit = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends/", {
        name: friendNameRef.current.value,
        age: friendAgeRef.current.value,
        email: friendEmailRef.current.value
      })
      .then(res => {
        props.history.push("/friends");
      })
      .catch(error => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="login">
      <div className="login-inputs">
        name <input ref={friendNameRef} type="text" />
        <br />
        age <input ref={friendAgeRef} type="text" />
        <br />
        email <input ref={friendEmailRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
