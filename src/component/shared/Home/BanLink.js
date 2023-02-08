import React from "react";

import img2 from "../../../Assets/Image/BrandLogo/2.png";

import img7 from "../../../Assets/Image/BrandLogo/7.png";
import img6 from "../../../Assets/Image/BrandLogo/6.png";

import img10 from "../../../Assets/Image/BrandLogo/8.png";

const BanLink = () => {
  return (
    <div className="m-8  bg-base-200 rounded-full  ">
      <div className=" ">
        <div className="grid p-8  grid-cols-4 gap-4 mx-auto  ">
          <div className="lg:w-2/4 sm:w-1/4">
            <a
              href="https://www.ridekayo.com/ditbikes"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img7}></img>
            </a>
          </div>
          <div className="lg:w-2/4 sm:w-1/4">
            <a
              href="https://www.kawasaki.com/en-us/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img6}></img>
            </a>
          </div>
          <div className="lg:w-2/4 sm:w-1/4">
            <a
              href="https://www.suzuki.com.bd/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2}></img>
            </a>
          </div>
          <div className="lg:w-2/4 sm:w-1/4">
            <a
              href="https://yamaha-motor.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img10}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanLink;
