import React from "react";

const JobCategory = ({ category }) => {
  const { title, img, jobsAvailable } = category;
  return (
    <div
      className="card w-96 bg-slate-100 pt-5  items-start p-5"
      style={{ width: "100%" }}
    >
      <div className="card-body">
        <img style={{ width: "50px" }} src={img} />
        <h2 className="card-title">{title}</h2>
        <p>{jobsAvailable} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;
