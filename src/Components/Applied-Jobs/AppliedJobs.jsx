import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const init = async () => {
    {
      let appliedJobIds = [];
      const localStorageItem = localStorage.getItem("appliedJobIds");

      console.log({ localStorageItem });
      if (localStorageItem) {
        appliedJobIds = JSON.parse(localStorageItem);
      }

      const allJobs = await fetch("jobList.json").then((res) => res.json());
      console.log({ allJobs });

      setAppliedJobs(
        appliedJobIds
          .reverse()
          .map((jobId) => allJobs.find((j) => j.id == jobId))
      );
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container mx-auto my-20">
      <div className="text-right">
        <select className="select select-bordered w-full max-w-xs">
          <option selected disabled>
            Filter By
          </option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>
      {appliedJobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </div>
  );
};

const JobItem = ({ job }) => {
  return (
    <div className="flex justify-between items-center border-2 rounded p-8 my-5 ">
      <div className="flex gap-10 items-center">
        <div className="p-16 rounded bg-slate-100">
          <img src="/src/assets/Logo/google-1-1 1.png" alt="" />
        </div>
        <div className="leading-loose">
          <h3>{job.title}</h3>
          <p>Google LLC</p>
          <button className="border-2 text-violet-600 border-indigo-500 rounded px-2 mr-3">
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
          <div className="flex gap-3">
            <p>Dhaka, Bangladesh</p>
            <p>Salary : 100K - 150K</p>
          </div>
        </div>
      </div>
      <div>
        <button className="primary-btn ">View Details</button>
      </div>
    </div>
  );
};

export default AppliedJobs;
