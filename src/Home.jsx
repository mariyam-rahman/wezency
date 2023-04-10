import React from "react";
import Banner from "./Components/Banner/Banner";
import JobCategory from "./Components/JobCategory/JobCategory";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Footer from "./Components/Footer/Footer";

const Home = () => {
  return (
    <div className="my-10 container mx-auto">
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
