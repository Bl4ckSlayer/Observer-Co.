import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-primary ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost   normal-case font-bold text-4xl">
          <h1 className="text-dark">Observer</h1>
        </Link>
      </div>
      <div>
        <div className="navbar-center  lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-xl font-semibold ">
                Home
              </Link>
              <Link to="/contactForm" className="font-semibold text-xl ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
