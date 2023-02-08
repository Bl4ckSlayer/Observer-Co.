import React from "react";
import ban2 from "../../../Assets/Image/ban2.jpg";
import "./Home.css";
const Ban2 = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-auto">
      <div>
        <div className=" text-center my-auto">
          <h1 className="   mt-4 text-3xl font-bold">
            Confidence in your data and decisions.
          </h1>
          <progress className="progress w-40  bg-primary mx-auto mb-4 mt-2 "></progress>
        </div>
        <div className="lg:flex justify-end">
          <div className=" lg:-mr-16 p-6 my-auto ">
            <img
              className="h-full w-[740px] object-cover "
              src={ban2}
              alt="Album"
            />
          </div>
          <div className=" my-auto">
            <div className="card w-4/6  h-56 bg-base-100 shadow-xl mb-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300 ">
              <div className="card-body">
                <h2 className="card-title">
                  Make Better Data-Driven Decisions
                </h2>
                <p className="font-thin text-sm">
                  Ensure accurate data collection and insights with automated
                  Audits that consistently test and validate your marketing
                  technologies.
                </p>
                <div className="card-actions justify-end">
                  <p className="font-thin text-sm underline text-warning">
                    learn more
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-4/6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300  h-56 bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">Protect Your Customer Data</h2>
                <p className="font-thin text-sm">
                  Audit your cookies and data collection technologies to know
                  what data is being collected, who is collecting it, and where
                  they are sending it.
                </p>
                <div className="card-actions justify-end">
                  <p className="font-thin text-sm underline text-warning">
                    learn more
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-4/6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300  h-56  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Optimize Customer Experiences</h2>
                <p className="font-thin text-sm">
                  Gather accurate customer insights and provide smooth
                  experiences by testing for technology and performance issues
                  that interrupt the customer journey.
                </p>
                <div className="card-actions justify-end">
                  <p className="font-thin text-sm text-warning underline">
                    learn more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ban2;
