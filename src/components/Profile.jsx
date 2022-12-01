import React, { useState, useEffect } from "react";
import { userInfo, userUpdate } from "../apiAdapter";

const Profile = (props) => {
  const loggedIn = props.loggedIn;
  const setCurrentUser = props.setCurrentUser;
  const currentUser = props.currentUser;
  const users = props.users
  const setUsers = props.setUsers;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);

  async function handleSubmit(e) {
    try {
      const updateProfile = await userUpdate(
        name,
        password,
        email,
        currentUser.id
      );
      console.log(updateProfile, "THIS IS UPDATEPROFILE")
      setUsers([...users, updateProfile]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await userInfo();

      setCurrentUser(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div id="profiles">
        {currentUser.name ? (
          <>
            <div>{currentUser.name}</div>
            <div>{currentUser.username}</div>
            <div>{currentUser.location}</div>
            <div>{currentUser.email}</div>
          </>
        ) : (
          <>
            {loggedIn ? (
              <div>
                <div>Your Profile</div>
              </div>
            ) : (
              <div>Please Log In</div>
            )}
          </>
        )}
        {!update ? (
          <div>
            <button
              onClick={() => {
                setUpdate(true);
              }}
            >
              updateProfile
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            ></input>
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            ></input>
            <button onSubmit={handleSubmit} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
