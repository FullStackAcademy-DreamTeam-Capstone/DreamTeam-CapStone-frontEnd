import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile } from "./";
import { login } from "../apiAdapter"
import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    async function fetchProfile () {
      const allProfile = await login(userName);
      setUsers(allProfile)
    }
    if (userName) {
      fetchProfile()
    }
  })

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true)
    }
    const user = localStorage.getItem("userName");
    if (user) {
      setUserName(user);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getLoggedInUser();
    }
  }, []);

  return (
    <div id="main">
      <div id="NavbarDiv">
        <Navbar
          error={error}
          setError={setError}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
      <div id="mainBody">
        hello i am main
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile users={users} loggedIn={loggedIn}/>} />
        </Routes>
        {/* <CreateProduct /> */}
      </div>
    </div>
  );
};

export default Main;
