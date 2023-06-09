import React, { useState, useEffect } from "react";
import Details from "../Details/Details";
import { Link } from "react-router-dom";
const FeaturedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const [showableJobs, setShowableJobs] = useState([]);

  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  useEffect(() => {
    if (showAll) {
      setShowableJobs(allJobs);
    } else {
      setShowableJobs(allJobs.slice(0, 4));
    }
  }, [allJobs, showAll]);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
      <p className="text-xl text-slate-600 font-medium my-5 text-center ">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 p-10 sm:p-0 mt-16">
        {showableJobs.map((job) => (
          <EachJob key={job.id} job={job}></EachJob>
        ))}
      </div>
      <div className="text-center py-6">
        <button
          className="primary-btn"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Show less" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export function EachJob({ job }) {
  // console.log({ ff: job });
  const { id, title, companyTitle, salary, companyLogo } = job;
  return (
    <div className="card  bg-base-100 border-2  leading-loose items-start ">
      <div className="card-body">
        <img style={{ width: "100px" }} src={companyLogo} />
        <h2 className="card-title mt-3">{title}</h2>
        <p>{companyTitle}</p>
        <div className=" justify-start ">
          {job?.jobType?.map((t) => (
            <button className="border-2 text-violet-600 border-indigo-500 rounded px-4 mr-5  mb-3">
              {t}
            </button>
          ))}

          <div className="flex gap-5">
            <div className="flex gap-2">
              <img
                className="object-contain"
                src="/src/assets/Icons/Location Icon.png"
                alt=""
              />
              <p>{job?.contact?.address}</p>
            </div>
            <div className="flex gap-2">
              <img
                className="object-contain"
                src="/src/assets/Icons/Frame.png"
                alt=""
              />
              <p>{salary}</p>
            </div>
          </div>
          <div className="mt-5">
            <Link to={`details/${id}`} className="primary-btn mt-4 ">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedJobs;
