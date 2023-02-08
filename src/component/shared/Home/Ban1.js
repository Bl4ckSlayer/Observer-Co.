import React from "react";
import ban1 from "../../../Assets/Image/ban1.png";
import "./Home.css";
const Ban1 = () => {
  return (
    <div className="box-content h-full bg-cover lg:card-side topbg mb-16 ">
      <div className="lg:flex justify-end my-auto content-center items-center mx-auto">
        <div className=" text-white  ">
          <h2 className="indent-2 hover:indent-8 card-title pt-6 text-5xl font-extrabold ">
            Do you know what's on your site?
          </h2>
          <p className=" text-base font-semibold">
            Ensure accurate and secure customer data with automatic audits that
            test and monitor your website technologies.
          </p>

          <button className=" justify-start btn btn-primary ml-6">
            Free Trial
          </button>
        </div>
        <div className=" mt-6 pt-32">
          <figure>
            <img className="w-3/4 mt-4" src={ban1} alt="Album" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Ban1;
