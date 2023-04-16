import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-hamburger">
            <div>
              <i class="fa-solid fa-bars fa-xl"></i>
            </div>
          </div>
          <form className="nav-searchbox">
            <div>
              <input
                className="nav-searchbar"
                type="text"
                placeholder="Search.."
              />
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            </div>
          </form>
          <div className="nav-buttons-right">
            <div className="nav-acct-btn">
              <i className="fa-regular fa-circle-user fa-xl"></i>
            </div>
            <div className="nav-cart-btn">
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
