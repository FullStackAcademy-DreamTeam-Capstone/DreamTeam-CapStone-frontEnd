import React, { useEffect } from "react";
import { userInfo } from "../apiAdapter";

const Profile = (props) => {
 
  const loggedIn = props.loggedIn;
  const setCurrentUser = props.setCurrentUser;
  const currentUser = props.currentUser;

  useEffect(() => {
    async function fetchData() {
      const data = await userInfo();
   
      setCurrentUser(data);
    }
    fetchData();
  }, [loggedIn]);

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
      </div>
    </div>
  );
};

export default Profile;
