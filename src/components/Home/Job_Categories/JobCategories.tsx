import React from "react";
import { JobCat } from "../../../Data/JobCategories/JobCat";
import Job from "../Latest-Jobs/Jobs-grid/Job";

const JobCategories = () => {
  return (
    <div className="flex gap-28 my-12">
      {JobCat.map((e) => {
        return (
            
          <div className="relative flex flex-col items-center justify-center gap-5 px-10 py-7 w-[150px] h-[160px]">
            <img src={e.icon} alt="" />
            <h2>{e.name}</h2>
            <div className="z-[-1] w-[150px] h-[160px] bg-white absolute pointer-events-none inset-0 drop-shadow-xl rounded-xl"/>
          </div>
        );
      })}
    </div>
  );
};

export default JobCategories;
