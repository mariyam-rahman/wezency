import React, { useState, useEffect } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="b">
      <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
      <p className="text-2xl text-slate-600 font-medium my-5 text-center b">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 p-10 sm:p-0 ">
        {jobs.map((job) => (
          <EachJob key={job.id} job={job}></EachJob>
        ))}
      </div>
      <div className="text-center py-6">
        <button className="primary-btn ">See All Jobs</button>
      </div>
    </div>
  );
};

export function EachJob({ job }) {
  console.log({ ff: job });
  const { title, companyTitle } = job;
  return (
    <div className="card  bg-base-100 border-2 p-5 B ">
      <figure>
        <img src="/src/assets/Logo/google-1-1 1-1.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
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
  );
}
export default FeaturedJobs;
