import React from "react";

const JobCategory = () => {
  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center">Job Category List</h2>
      <p className="text-2xl text-slate-600 font-medium my-5 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-6 items-center justify-center">
        <div className="card w-96 bg-slate-50 pt-5 shadow-xl items-start p-5">
          <figure>
            <img
              className=""
              src="/src/assets/Icons/accounts 1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>300 Jobs Available</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/Icons/accounts 1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/Icons/accounts 1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
