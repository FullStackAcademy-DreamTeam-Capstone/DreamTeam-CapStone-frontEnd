import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import { login, register, userInfo } from "../apiAdapter";

const Navbar = (props) => {
  const error = props.error;
  const setError = props.setError;
  const setLoggedIn = props.setLoggedIn;
  const currentUser = props.currentUser;
  const setCurrentUser = props.setCurrentUser;
  const loggedIn = props.loggedIn;

  const navigate = useNavigate();

  //REGISTER FUNCTION
  const [registering, setRegistering] = useState(false);
  const [registerInfo, setRegisterinfo] = useState({
    username: "",
    password: "",
    name: "",
    location: "",
    email: "",
  });

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const username = registerInfo.username;
    const password = registerInfo.password;
    const name = registerInfo.name;
    const location = registerInfo.location;
    const email = registerInfo.email;

    if (password.length <= 6) {
      setError("Password must be more than 6 characters long.");
    } else {
      const response = await register(
        username,
        password,
        name,
        location,
        email
      );
      localStorage.removeItem("token");

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        setLoggedIn(response.token);
        setRegistering(false);
        setError(null);
        setRegisterinfo({
          username: "",
          password: "",
          name: "",
          location: "",
          email: "",
        });
      } else {
        setLoggedIn(false);
        setError("User already exists");
      }
    }
  }

  //LOGIN FUNCTION
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  async function handleSubmitLogin(event) {
    event.preventDefault();
    const username = loginInfo.username;
    const password = loginInfo.password;
    const response = await login(username, password);
    localStorage.removeItem("token");
    if (response && response.token) {
      localStorage.setItem("token", response.token);
      setLoggedIn(response.token);
      setLoggingIn(false);
      setError(null);
    } else {
      setLoggedIn(false);
      setError("Username does not exist || Username/Password do not match.");
    }
    setLoginInfo({
      username: "",
      password: "",
    });
  }

  //LOGOUT FUNCTION
  async function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  }

  //GET USER INFO FUNCTION
  useEffect(() => {
    const userLogIn = localStorage.getItem("token");
    if (userLogIn) {
      setLoggedIn(userLogIn);

      const fetchData = async () => {
        const data = await userInfo();
        setCurrentUser(data);
      };
      fetchData();
    }
  }, [loggedIn]);

  return (
    <div id="navbar">
      <div className="navbarLeftLinks">
        <h2>Amazon Lite</h2>

        <NavLink to="/">
          <button>Home</button>
        </NavLink>

        <NavLink to="products">
          <button>Products</button>
        </NavLink>

        <NavLink to="/cart">
          <button>Cart</button>
        </NavLink>
      </div>

      <>
        {loggedIn ? (
          <h2> Welcome {currentUser.username}! </h2>
        ) : (
          <h2> Please log in or make an account with us to get started! </h2>
        )}
      </>

      <>
        {loggedIn ? (
          <div>
            <NavLink to="profile">
              <button>Profile</button>
            </NavLink>
            <>
              {currentUser.isadmin ? (
                <div>
                  <NavLink to="/adminpanel">
                    <button>Admin Panel</button>
                  </NavLink>
                  <NavLink to="/products/create">
                    <button>Add a Product</button>
                  </NavLink>
                </div>
              ) : null}
            </>

            <button id="logOutButton" onClick={logout}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div id="navbtns">
            <Popup trigger={<button> Register </button>}>
              <div id="registerPopup">
                <form onSubmit={handleSubmitRegister}>
                  <h4> Register </h4>

                  <label htmlFor="email5"> Email: </label>
                  <input
                    id="email5"
                    type="text"
                    onChange={(e) =>
                      setRegisterinfo({
                        ...registerInfo,
                        email: e.target.value,
                      })
                    }
                    value={registerInfo.email}
                    required
                  />

                  <br />

                  <label htmlFor="username1"> Username: </label>
                  <input
                    id="username1"
                    type="text"
                    onChange={(e) =>
                      setRegisterinfo({
                        ...registerInfo,
                        username: e.target.value,
                      })
                    }
                    value={registerInfo.username}
                    required
                  />

                  <br />

                  <label htmlFor="password2"> Password: </label>
                  <input
                    id="password2"
                    type="password"
                    onChange={(e) =>
                      setRegisterinfo({
                        ...registerInfo,
                        password: e.target.value,
                      })
                    }
                    value={registerInfo.password}
                    required
                  />

                  <br />

                  <label htmlFor="name3"> Name: </label>
                  <input
                    id="name3"
                    type="text"
                    onChange={(e) =>
                      setRegisterinfo({ ...registerInfo, name: e.target.value })
                    }
                    value={registerInfo.name}
                    required
                  />

                  <br />

                  <label htmlFor="location4"> Location: </label>
                  <input
                    id="location4"
                    type="text"
                    onChange={(e) =>
                      setRegisterinfo({
                        ...registerInfo,
                        location: e.target.value,
                      })
                    }
                    value={registerInfo.location}
                    required
                  />

                  <br />

                  {error ? <small className="error">{error}</small> : null}

                  <button className="submitButton" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            </Popup>

            <Popup trigger={<button> Login </button>}>
              <div id="loginPopup">
                <form onSubmit={handleSubmitLogin}>
                  <h4> Login </h4>
                  <label htmlFor="username1"> Username: </label>
                  <input
                    id="username1"
                    type="text"
                    onChange={(e) =>
                      setLoginInfo({ ...loginInfo, username: e.target.value })
                    }
                    value={loginInfo.username}
                    required
                  />

                  <br />

                  <label htmlFor="password2"> Password: </label>
                  <input
                    id="password2"
                    type="password"
                    onChange={(e) =>
                      setLoginInfo({ ...loginInfo, password: e.target.value })
                    }
                    value={loginInfo.password}
                    required
                  />

                  {error ? <small className="error">{error}</small> : null}

                  <button className="submitButton" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            </Popup>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
