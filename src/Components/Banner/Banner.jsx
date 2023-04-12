import React from "react";

import img from "./../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-8">
        <div className="text-left">
          <h1 className="text-5xl font-extrabold ">
            One Step <br /> Closer To Your <br />{" "}
            <span style={{ color: "#7E90FE" }}>Dream Job</span>
          </h1>
          <p className="text-2xl text-slate-600 font-medium my-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="primary-btn">Get Started</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
