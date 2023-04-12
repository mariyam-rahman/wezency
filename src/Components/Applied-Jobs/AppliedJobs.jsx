import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [currentFilter, setCurrentFilter] = useState(null);

  const [filteredAppliedJobs, setFilteredAppliedJobs] = useState([]);

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

  useEffect(() => {
    if (appliedJobs?.length < 1) return;

    if (currentFilter == "remote") {
      setFilteredAppliedJobs(
        appliedJobs.filter((e) => e.jobType.includes("Remote"))
      );
    } else if (currentFilter == "onsite") {
      setFilteredAppliedJobs(
        appliedJobs.filter((e) => e.jobType.includes("Onsite"))
      );
    } else {
      setFilteredAppliedJobs(appliedJobs);
    }
  }, [appliedJobs, currentFilter]);

  return (
    <div className="container mx-auto my-20">
      <div className="text-right">
        <select
          onClick={(e) => {
            console.log(e.target.value);
            setCurrentFilter(e.target.value);
          }}
          className="select select-bordered w-full max-w-xs"
        >
          <option selected disabled>
            Filter By
          </option>
          <option value="shit" selected>
            All
          </option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>
      {filteredAppliedJobs.map((job) => (
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
          <img
            src={job.companyLogo}
            alt=""
            style={{ width: "100px", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="leading-loose">
          <h3>{job.title}</h3>
          <p>{job.companyTitle}</p>
          {job?.jobType?.map((t) => (
            <button className="border-2 text-violet-600 border-indigo-500 rounded px-4 mr-5  mb-3">
              {t}
            </button>
          ))}

          <div className="flex gap-3">
            <p>{job.contact?.address}</p>
            <p>{job.salary}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/details/${job.id}`} className="primary-btn mt-4 ">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobs;
