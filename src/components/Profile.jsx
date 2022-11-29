import React, {useEffect} from "react";
import {userInfo } from "../apiAdapter";

const Profile = (props) => {
  console.log(props, "PROPS");
  const loggedIn = props.loggedIn;
  const setCurrentUser = props.setCurrentUser
  const currentUser = props.currentUser
console.log(currentUser, "THIS IS CURRENTUSER")
  useEffect(() => {
      async function fetchData() {
        const data = await userInfo();
        console.log(data, "THIS IS DATA")
        setCurrentUser(data);
      };
      fetchData();
    }, [loggedIn]);

  return (
    <div>
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
    </div>
  );
};

export default Profile;
