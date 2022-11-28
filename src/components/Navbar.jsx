import React from "react"
import { useNavigate, NavLink } from "react-router-dom";
import Register from "./Register"

const Navbar = (props) => {
  const error = props.error
  const setError = props.setError
  const setLoggedIn = props.setLoggedIn


  return (
    <div id="navbar">
      <h2>I am navbar</h2>
      <Register
       error = {error}
       setError = {setError} 
       setLoggedIn = {setLoggedIn}
       />
    </div>
  );
};

export default Navbar
