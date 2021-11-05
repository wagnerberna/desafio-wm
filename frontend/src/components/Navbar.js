import React from "react";

const Navbar = ({title}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#!" className="navbar-brand">{title}</a>
      </div>
    </nav>
  );
}

export default Navbar;