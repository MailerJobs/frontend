import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Home/Search/Search";
import LatestJobs from "../components/Home/Latest-Jobs/LatestJobs";
import JobCategories from "../components/Home/Job_Categories/JobCategories";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import HiringSection from "../components/Home/Hiring/HiringSection";
import BlogPost from "../components/Home/BlogPost/BlogPost";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-home-page w-full h-[500px] bg-cover bg-center flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl font-bold font-roboto">Find Your Dream Job</h1>
        <Search />
      </div>
      <div className="flex flex-col items-center my-16">
        <h1 className="text-5xl font-roboto font-medium">Latest Jobs</h1>
        <LatestJobs />
      </div>
      <div className="flex flex-col items-center my-16">
        <h1 className="text-5xl font-roboto font-medium">Job Categories</h1>
        <JobCategories />
      </div>
      <div className="w-full bg-test-back flex flex-col items-center">
        <h1 className="font-bebas text-5xl text-white mt-10">Testimonial</h1>
        <Testimonial />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-roboto font-medium mt-10">Hiring Companies</h1>
        <HiringSection />
      </div>
      <div> 
        <h1 className="text-4xl font-bold text-purple-button ml-28 mt-9">BLOG POST</h1>
        <BlogPost />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
