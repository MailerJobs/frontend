// @ts-nocheck
import React, { useContext, useState, useEffect } from "react";
import { JobIndex } from "../../context/job_list_context";
import fetchskills from "../../../utils/fetchskill";

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

const Job_RightSection = (props) => {
  const { job_index, setJobIndex, skill, setSkill } = useContext(JobIndex);

  // console.log("JRS JI = "+JSON.stringify(job_index));

  let text = job_index.job_description;
  let jobJD;
  if (typeof text === "string") {
    jobJD = text.replace(/\n/g, "<br>");
    const element = document.getElementById("jd");
    if (element) {
      element.innerHTML = jobJD;
    } else {
      console.log("Element not found");
    }
  } else {
    // console.log("Text is not defined or is not a string");
  }

  // console.log(JSON.stringify(skill));

  return (
    <div className="flex flex-col p-5 gap-5 border-gray-300 border-[1px]">
      <div className="bg-white w-full flex flex-col gap-6 pt-5">
        <div className="flex items-center gap-5">
          <img
            src={job_index.image_url}
            alt=""
            className="w-[100px] h-[100px] object-contain bg-white 
                     border-gray-300 drop-shadow-lg border-[1px]"
          />
          <h1 className="font-inter text-xl">{job_index.job_org}</h1>
        </div>
        <div className="flex items-center justify-between px-2">
          <div>
            <div>
              <h1 className="text-2xl font-medium">{job_index.job_title}</h1>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div>{job_index.location}</div>
              <div className="w-[1px] h-5 bg-gray-300 mt-[2px]" />
              <div>Posted: {job_index.date_posted}</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg text-white font-inter 
                               font-bold py-2 px-7 rounded-full
                               bg-gradient-to-r from-footer-back to-purple-button"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300" />
      </div>
      <div className=" w-full">
        <h1 className="font-inter font-bold text-2xl">Job Details</h1>
        <div className="mt-2">
          <h1>
            <strong>Job ID :</strong>
            {job_index.job_id}
          </h1>
          <h1>
            <strong>Salary :</strong>
            {job_index.salary}
          </h1>
          <h1>
            <strong>Experience :</strong>
            {job_index.experience}
          </h1>
          <h1>
            <strong>Education Level :</strong>
            {job_index.education}
          </h1>
        </div>
        <h1 className="font-inter text-xl font-bold my-4">About the role</h1>
        <p id="jd" className="font-inter"></p>
        <h1 className="font-inter text-xl font-bold my-4">Required skills</h1>
        <div className="flex gap-5 flex-wrap">
          {skill.map((e, key) => {
            return (
              <div key={key} className="bg-gray-400 px-3 py-2 rounded-full">
                <h1 className="font-inter">{e.skill_name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Job_RightSection;
