import React, { useState, useEffect } from "react";
import { useResolvedPath } from "react-router-dom";
import { userInfo, userUpdate } from "../apiAdapter";

const Profile = (props) => {
  const loggedIn = props.loggedIn;
  const setCurrentUser = props.setCurrentUser;
  const currentUser = props.currentUser;
  const users = props.users
  const setUsers = props.setUsers;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [update, setUpdate] = useState(false);

  async function handleSubmit(e) {
    try {
      const updateProfile = await userUpdate(
        username,
        password,
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
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
