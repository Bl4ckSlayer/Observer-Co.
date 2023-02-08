import React from "react";

const Banv = () => {
  return (
    <div className="mb-6 mt-6 ">
      <div className=" text-center p-8">
        <h1 className="   mt-4 text-3xl font-bold">See How It Works</h1>
        <progress className="progress w-40  bg-primary mx-auto mb-4 mt-2 "></progress>
      </div>
      <div className="mx-auto flex justify-center">
        {" "}
        <video
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
          autoplay="{true}"
          className=" w-2/4"
          controls
        ></video>
      </div>
    </div>
  );
};

export default Banv;
