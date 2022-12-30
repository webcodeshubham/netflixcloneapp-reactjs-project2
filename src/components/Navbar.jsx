import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // When you scroll 100px down in the y-axis, handleShow() will be executed.
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {})
    };
  }, []);

  return (
    <>
      {/* Container => Nav */}
      <div className={`nav ${show && "nav__black"}`}>
        {/* Brand Logo Img */}
        <img
          className="nav__brandLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        {/* User Avatar Logo Img */}
        <img
          className="nav__userAvatar"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt="User Avatar"
        />
      </div>
    </>
  );
};

export default Navbar;
