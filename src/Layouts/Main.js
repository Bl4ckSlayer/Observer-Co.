import React from "react";

import { Outlet } from "react-router-dom";
import Nav from "../component/shared/Nav/Nav";
import Footer from "../component/shared/Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <div className=" ">
        <Nav></Nav>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
