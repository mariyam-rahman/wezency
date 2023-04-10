import React from "react";
import Banner from "./Components/Banner/Banner";
import JobCategory from "./Components/JobCategory/JobCategory";

const Home = () => {
  return (
    <div className="my-10 container mx-auto">
      <Banner></Banner>
      <JobCategory></JobCategory>
    </div>
  );
};

export default Home;
