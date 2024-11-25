import React from "react";
import Header from "../components/Header/Header";
import Categories from "../components/Jobs/Categories/Categories";
import Search from "../components/Home/Search/Search";
import Filters from "../components/Jobs/Filters/Filters";
import JobSection from "../components/Jobs/Job_section/Job_Section";

const JobsPage = () => {
  return (
    <div className="">
      <Header />
      <Categories />
      <div className="w-full bg  h-[250px] flex justify-center items-center">
        <div className="drop-shadow-job_search">
          <Search />
        </div>
      </div>
      <Filters />
      <JobSection />
    </div>
  );
};

export default JobsPage;
