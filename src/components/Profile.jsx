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
  const [isadmin, setIsAdmin] = useState(false)




  async function handleSubmit(e) {
    try {
      const updateProfile = await userUpdate(
        name,
        password,
        email,
        currentUser.id,
        isadmin
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

  console.log(currentUser, "this is current user from profile")

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
            ></input>
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            ></input>
             {/* <input
              placeholder="isadmin"
              type="checkbox"
              value={isadmin}
              onChange={(e) => {
                setIsAdmin(!isadmin)
              }}
            ></input> */}
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
