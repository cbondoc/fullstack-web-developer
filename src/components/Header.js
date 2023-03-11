import React from "react";
import "./Header.css";
import logoUrl from "../assets/images/logo_cbondoc.png";
const Header = () => (
  <div className="header" id="page-top">
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
      style={{ backgroundColor: "#7A8082" }}
    >
      <div className="container">
        <img src={logoUrl} alt="Tesla" width={75} height={45} />
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
export default Header;
