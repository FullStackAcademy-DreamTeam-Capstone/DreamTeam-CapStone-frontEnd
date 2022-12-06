import {React, useState} from "react";
import { userInfo, userUpdate } from "../apiAdapter";


const AdminPanel = (props) => {
  const currentUser = props.currentUser;
  const users = props.users;
  const setUsers = props.setUsers;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isadmin, setIsAdmin] = useState(false)     

async function handleSubmit(user) {
console.log(user, "this is user ")
try {
    const updateProfile = await userUpdate(
      user.name,
      user.password,
      user.email,
      user.id,
      true
    );
    console.log(updateProfile, "THIS IS UPDATEPROFILE")
    setUsers([...users, updateProfile]);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>
      <div id="adminHeader"><h1>Admin Panel</h1></div>
      <div id="allUsers">
        {currentUser && currentUser.isadmin && users && users.length ? (
          users.map((user) => {
            console.log(user, "this is the user")
            return (
              <div id="users" key={`usersAdminPanel-${user.id}`}>
                <div id="singleUser">
                  <div>Name: {user.name}</div>
                  <div>Username: {user.username}</div>
                  <div>Location: {user.location}</div>
                  <div>Email: {user.email}</div>
                  <div>Admin: {user.isadmin ? "yes" : "no"}</div>

                </div>
                <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(user);
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
             <label>Admin?</label>
             <input
              placeholder="isadmin"
              type="checkbox"
              value={isadmin}
              onChange={(e) => {
                setIsAdmin(!isadmin)
              }}
            ></input>
            <button type="submit">
              Submit
            </button>
          </form>
              </div>
            );
          })
        ) : (
          <div>Hello</div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
