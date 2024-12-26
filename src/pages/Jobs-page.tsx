import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Categories from "../components/Jobs/Categories/Categories";
import Search from "../components/Home/Search/Search";
import Filters from "../components/Jobs/Filters/Filters";
import JobSection from "../components/Jobs/Job_section/Job_Section";
import Apply from "../components/Jobs/Job_section/apply";

const JobsPage = () => {
  
  return (
    <div>
      {/* <div className="fixed top-[-1px] z-30">
        <Apply />
      </div> */}
      <Categories />
      <div className="w-full bg  h-[250px] flex justify-center items-center">
        <div className="drop-shadow-job_search z-20">
          <Search />
        </div>
      </div>
      <Filters />
      <JobSection />
    </div>
  );
};

export default JobsPage;
