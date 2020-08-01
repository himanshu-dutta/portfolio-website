import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  if (props.type === "landing") {
    return (
      <div className="nav-wrapper">
        <div className="dots-wrapper">
          <div id="dot-1" className="browser-dot"></div>
          <div id="dot-2" className="browser-dot"></div>
          <div id="dot-3" className="browser-dot"></div>
        </div>

        <ul id="navigation">
          <li onClick={() => props.handler("Landing")}>Home</li>|
          <li onClick={() => props.handler("About")}>About</li>|
          <li onClick={() => props.handler("Blogs")}>Blogs</li>|
          <li onClick={() => props.handler("Portfolio")}>Projects</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="nav-wrapper">
      <div className="dots-wrapper">
        <div id="dot-1" className="browser-dot"></div>
        <div id="dot-2" className="browser-dot"></div>
        <div id="dot-3" className="browser-dot"></div>
      </div>

      <ul id="navigation">
        <li>
          <Link
            to={{
              pathname: "/",
              state: { pageName: "Landing" },
            }}
          >
            Home
          </Link>
        </li>
        |
        <li>
          <Link
            to={{
              pathname: "/",
              state: { pageName: "About" },
            }}
          >
            About
          </Link>
        </li>
        |
        <li>
          <Link
            to={{
              pathname: "/",
              state: { pageName: "Blogs" },
            }}
          >
            Blogs
          </Link>
        </li>
        |
        <li>
          <Link
            to={{
              pathname: "/",
              state: { pageName: "Portfolio" },
            }}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
