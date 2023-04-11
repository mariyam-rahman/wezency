import React from "react";
import Banner from "./Components/Banner/Banner";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Footer from "./Components/Footer/Footer";
import JobCategories from "./Components/JobCategories/JobCategories";

const Home = () => {
  return (
    <div className="my-10 container mx-auto">
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
