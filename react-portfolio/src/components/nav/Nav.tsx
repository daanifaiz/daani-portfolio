import React, { useState } from "react";
import "./nav.css";
import { BsHouse } from "react-icons/bs";
import { BsHammer} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

export default function NAV(): JSX.Element {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a className={activeNav === "#" ? "active" : ""} href="/">
        <BsHouse />
      </a>
      <br className="nav__gap"></br>
      <a
        className={activeNav === "#projects" ? "active" : ""}
        href="#projects"
        onClick={() => setActiveNav("#projects")}
      >
        <BsHammer/>
      </a>
      <br></br>
      <a href="https://medium.com/@daanifaiz">
        <SiMedium />
      </a>
      <a href="https://www.linkedin.com/in/daani-faiz/">
        <BsLinkedin />
      </a>
    </nav>
  );
}
