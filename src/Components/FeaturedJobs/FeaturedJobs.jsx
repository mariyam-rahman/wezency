import React from "react";

const FeaturedJobs = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
      <p className="text-2xl text-slate-600 font-medium my-5 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 justify-items-center ">
        <div className="card  bg-base-100 border-2 p-5">
          <figure>
            <img src="/src/assets/Logo/google-1-1 1-1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Database Engineer</h2>
            <p>Google LLC</p>
            <div className=" justify-start py-5 ">
              <button className="border-2 text-violet-600 border-indigo-500 rounded px-2">
                Remote
              </button>
              <button
                className="
                border-2
                text-violet-600
                border-indigo-500
                rounded
                px-2"
              >
                Full Time
              </button>

              <div>
                <p>Dhaka, Bangladesh</p>
                <p>Salary : 100K - 150K</p>
              </div>
              <button className="primary-btn ">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
