// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Job_LeftSection from "./Job_LeftSection";
import Job_RightSection from "./Job_RightSection";
import { JobIndex } from "../../context/job_list_context";

interface Job {
  job_id: string;
  job_title: string;
  salary: string;
  experience: string;
  education: string;
  date_posted: string;
  job_org: string;
  location: string;
  image_url: string;
  job_description: string;
}

const JobSection = () => {
  const [jobdata, setJobs] = useState<Job[]>([]);

  const { job_index, setJobIndex } = useContext(JobIndex);


  useEffect(() => {
    fetch("http://127.0.0.1:5000/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        if (data && data[0].job_id) {
          // console.log("Important = "+data[0].job_id); // safely access the job_id
          setJobIndex(data[0]);
          
        } else {
          console.log("Job object or job_id is undefined");
        }
      })
      .catch((error) => {
        console.log("Api Latest Error:" + error);
      });
  }, []);

  // console.log("jobdata = " + JSON.stringify(jobdata));
  // console.log(Array.isArray(jobdata));

  return (
    <div className="w-full h-[1000px] flex flex-row gap-1">
      <div className=" w-[550px] ml-1">
        <Job_LeftSection jobdata={jobdata} />
      </div>
      <div className="w-[1px] h-auto bg-gray-300" />
      <div className=" w-[950px] grow overflow-x-auto"><Job_RightSection jobdata={jobdata} /></div>
    </div>
  );
};

export default JobSection;
