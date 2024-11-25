// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { JobIndex } from "../../context/job_list_context";

const Job_LeftSection = (props) => {
  const [value, setValue] = useState("");

  const { job_index, setJobIndex } = useContext(JobIndex);

  const settingValue = (key) => {
    console.log(key);
    setJobIndex(key);
    // setValue(key)
    // console.log(value);
  };

  return (
    <div>
      {props.jobdata.map((e) => (
        <div
          onClick={() => settingValue(e)}
          className="h-auto border-b-[1px] border-gray-300 py-5 px-5 font-inter"
        >
          <div className="flex gap-2">
            <div className="flex items-center justify-center">
              <img
                src={e.image_url}
                alt=""
                className=" bg-white w-[110px] h-[110px] border-gray-300 border-[1px]  object-contain drop-shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{e.job_title}</h1>
              <div className="flex flex-col justify-center gap-1">
                <h1 className="text-sm text-gray-800">@ {e.job_org}</h1>
                <div className="flex text-sm">
                  <img
                    src="home/icons/Location_icon.png"
                    alt=""
                    className="w-4"
                  />
                  <h1 className="text-gray-500">{e.location}</h1>
                </div>
                <div className="flex text-sm">
                  <img src="SVG/Calendar.svg" alt="" className="w-5" />
                  <h1 className="text-gray-500">{e.date_posted}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job_LeftSection;
