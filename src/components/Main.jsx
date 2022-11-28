import React, { useEffect, useState } from "react";
import { Navbar } from "./"

const Main = () => {
  return (
    <div id="main">
      <div id="NavbarDiv">
      <Navbar/>
      </div>
      <div id="mainBody">
        hello i am main
      </div>
  </div>
  );
};

export default Main;
