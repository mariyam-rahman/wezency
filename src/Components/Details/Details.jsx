import React from "react";

const Details = () => {
  return (
    <div className="container mx-auto flex ">
      <div>
        <p>
          <strong>Job Description:</strong> A UI/UX (User Interface/User
          Experience) designer is responsible for designing and creating
          engaging and effective interfaces for software and web applications.
          This includes designing the layout, visual design, and interactivity
          of the user interface.
        </p>
        <p>
          <strong>Job Responsibility:</strong> Collaborating with
          cross-functional teams: UI/UX designers often work closely with other
          teams, including product management, engineering, and marketing, to
          ensure that the user interface is aligned with business and technical
          requirements. You will need to be able to effectively communicate your
          design ideas and gather feedback from other team members.
        </p>
        <p>
          <strong>Educational Requirements:</strong>Bachelor degree to complete
          any reputational university.
        </p>
        <p>
          <strong>Experiences:</strong>2-3 Years in this field.
        </p>
      </div>
      <div className="card bg-indigo-100 shadow-xl p-5">
        <h3>Job Details</h3>
        <hr />
        <p>
          <strong>Salary : </strong> 100K - 150K (Per Month)
        </p>
        <p>
          <strong>Job Title : </strong> Product Designer
        </p>
        <h3>Job Details</h3>
        <hr />
        <p>
          <strong>Phone : </strong> 01750-00 00 00
        </p>
        <p>
          <strong>Email : </strong> info@gmail.com
        </p>
        <p>
          <strong>Address : </strong> Dhanmondi 32, Sukrabad Dhaka, Bangladesh
        </p>
        <button className="primary-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Details;
