import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [currentJob, setCurrentJob] = useState();

  const fetchJobWithId = async () => {
    const allJobs = await fetch("jobList.json").then((res) => res.json());

    const current = allJobs.find((job) => {
      return job.id == id;
    });

    setCurrentJob(current);
  };

  useEffect(() => {
    fetchJobWithId();
  }, []);

  return currentJob ? (
    <div className="container mx-auto flex ">
      <div className="leading-loose mt-20">
        <p>
          <strong>Job Description:</strong> {currentJob.description}
        </p>
        <p className="py-6">
          <strong>Job Responsibility:</strong> {currentJob.responsibility}{" "}
        </p>
        <p>
          <strong>Educational Requirements:</strong>{" "}
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
          <strong>Phone : </strong> {currentJob.contact.phone}
        </p>
        <p>
          <strong>Email : </strong> {currentJob.contact.email}
        </p>
        <p>
          <strong>Address : </strong> {currentJob.contact.address}
        </p>
        <button className="primary-btn">Apply Now</button>
      </div>
    </div>
  ) : (
    <div>nothing</div>
  );
};

export default Details;
