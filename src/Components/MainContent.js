import React from "react";
import logo from "../logo.svg";
import "../App.css";

function MainContent() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <center>this is the main content</center> 
        <center>with a react symbol</center> 
      </p>
    </div>
  );
}

export default MainContent;
