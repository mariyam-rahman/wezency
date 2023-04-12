import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [currentJob, setCurrentJob] = useState([]);

  const [alreadyApplied, setAlreadyApplied] = useState(false);

  useEffect(() => {
    fetch("/jobList.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((job) => job.id == id);
        setCurrentJob(job);
      });
  }, [id]);

  useEffect(() => {
    let appliedJobIds = [];
    const localStorageItem = localStorage.getItem("appliedJobIds");
    if (localStorageItem) {
      appliedJobIds = JSON.parse(localStorageItem);
    }
    if (appliedJobIds.includes(currentJob.id)) {
      setAlreadyApplied(true);
    }
    console.log({ appliedJobIds, localStorageItem, alreadyApplied });
  }, [currentJob, alreadyApplied]);

  const handleApplyNowClick = () => {
    if (alreadyApplied) return;

    let appliedJobIds = [];
    const localStorageItem = localStorage.getItem("appliedJobIds");

    console.log({ localStorageItem });
    if (localStorageItem) {
      appliedJobIds = JSON.parse(localStorageItem);
    }

    localStorage.setItem(
      "appliedJobIds",
      JSON.stringify([...appliedJobIds, currentJob.id])
    );
    setAlreadyApplied(true);
    // return appliedJobIds;
  };

  return currentJob ? (
    <div className="container mx-auto flex ">
      <div className="leading-loose mt-20 ">
        <p>
          <strong>Job Description:</strong> {currentJob.description}
        </p>

        <p className="py-6">
          <strong>Job Responsibility:</strong> {currentJob.responsibility}
        </p>

        <p>
          <strong>Educational Requirements:</strong>
          {currentJob.educationalRequirement}
        </p>

        <p className="py-6">
          <strong>Experiences:</strong> {currentJob.experience}
        </p>
      </div>

      <div className="card bg-indigo-100 shadow-xl p-5">
        <h3>Job Details</h3>
        <hr />

        <p>
          <strong>Salary : </strong> {currentJob.salary}
        </p>

        <p>
          <strong>Job Title : </strong> {currentJob.title}
        </p>
        <h3>Job Details</h3>
        <hr />

        <p>
          <strong>Phone : </strong> {currentJob.contact?.phone}
        </p>

        <p>
          <strong>Email : </strong> {currentJob.contact?.email}
        </p>

        <p>
          <strong>Address : </strong> {currentJob.contact?.address}
        </p>
        <button
          className="primary-btn"
          onClick={handleApplyNowClick}
          // disabled={alreadyApplied}
        >
          {alreadyApplied ? "Already applied" : "Apply Now"}
        </button>
      </div>
    </div>
  ) : (
    <div>nothing</div>
  );
};

export default Details;

// const shit = {
//   appliedJobIds: ["1", "2"],
// };
// appliedJobs = fetch all jobs then filter by appliedJobIds
// render appliedJobs
