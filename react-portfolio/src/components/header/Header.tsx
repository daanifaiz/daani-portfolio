import React from "react";
import "./header.css";
const cartoonDaani = require("../../assets/cartoonDaani.jpg");

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container header__container">
        <h2>G'Day, I'm Daani</h2>
        <div className="cartoonDaani">
          <img
            className="header__image"
            src={cartoonDaani}
            alt="Daani AI Headshot"
          />
        </div>
        <a href="#about" className="scroll__down">
          About Me
        </a>
        <h3>I’m a product manager at Atlassian.</h3>
        <h3>Welcome to my portfolio. Feel free to take a look around</h3>
      
        <h3>My professional career ranges from designing implantable hearing
          devices as a mechatronics engineer to managing shipping scalable,
          innovative software solutions for Atlassian.</h3>
      </div>
    </header>
  );
}
