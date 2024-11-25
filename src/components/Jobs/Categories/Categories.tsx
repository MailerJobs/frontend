import React from "react";
import { catData } from "../../../Data/Jobs/Categories/Cat_data";

const Categories = () => {
  return (
    <div
      className="flex w-full 
    bg-footer-back h-20 items-center justify-center gap-20"
    >
      {catData.map((e) => {
        return (
          <div
            className="flex gap-2 rounded-xl text-lg 
                items-center justify-end 
                h-10 px-5 py-3 bg-white drop-shadow-job_cat"
          >
            <div className="w-[140px] font-poppins font-medium  flex justify-center">{e.name}</div>
            <img src={e.icon} alt="" className="w-10 " />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
