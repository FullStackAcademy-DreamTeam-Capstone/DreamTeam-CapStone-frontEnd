import {React, useState} from "react";
import { userInfo, userUpdate } from "../apiAdapter";


const AdminPanel = (props) => {
  const currentUser = props.currentUser;
  const users = props.users;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);
  const [isadmin, setIsAdmin] = useState(false)

async function handleSubmit(user) {
console.log(user, "this is user ")
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

  return (
    <div>
      <div>
        {currentUser.isadmin ? (
          users.map((user) => {
            return (
              <div id="users" key={`user-${user.id}`}>
                <div id="singleUser">
                  <div>Name: {user.name}</div>
                  <div>Username: ${user.username}</div>
                  <div>Location: ${user.location}</div>
                  <div>Email: ${user.email}</div>
                </div>
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

             <input
              placeholder="isadmin"
              type="checkbox"
              value={isadmin}
              onChange={(e) => {
                setIsAdmin(!isadmin)
              }}
            ></input>
            <button onSubmit={handleSubmit} type="submit">
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
