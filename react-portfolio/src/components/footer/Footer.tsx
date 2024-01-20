import React from "react";
import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer__body">
        This simple portfolio was developed using node.js and typescript.<p></p>{" "}
        Reach out over LinkedIn to get in
        touch!
      </div>

      <ul className="permalinks">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="https://medium.com/@daanifaiz">Blog</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daani-faiz/">LinkedIn</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Daani Faiz. All rights reserved.</small>
      </div>
    </footer>
  );
}
