import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-32">
      <h2 className="text-5xl font-bold text-center">Job Category List</h2>
      <p className="text-xl text-slate-600 font-medium my-5 text-center pb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 p-10 sm:p-0 ">
        {categories.map((category) => {
          return <JobCategory key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default JobCategories;
