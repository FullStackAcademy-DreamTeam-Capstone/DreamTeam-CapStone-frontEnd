import React, { useEffect, useState } from "react";
import { Navbar } from "./"

const Main = () => {
  const [error, setError] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div id="main">
      <div id="NavbarDiv">
      <Navbar 
      error = {error}
      setError = {setError}
      setloggedIn = {setLoggedIn}
      />
      </div>
      <div id="mainBody">
        hello i am main
      </div>
  </div>
  );
};

export default Main;
