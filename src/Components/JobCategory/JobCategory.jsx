import React from "react";

const JobCategory = (props) => {
  // const { title, img } = props;
  return (
    <div
      className="card w-96 bg-slate-50 pt-5 shadow-xl items-start p-5"
      style={{ width: "100%" }}
    >
      <figure>
        <img src="/src/assets/Icons/accounts 1.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.category.title}</h2>
        <p>300 Jobs Available</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default JobCategory;
