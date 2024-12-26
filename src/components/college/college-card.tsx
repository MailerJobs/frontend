// @ts-nocheck
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobIndex } from "../context/job_list_context";


const CollegeCard = ({ college }) => {
  const history = useNavigate();
  const {singlecollege, setSingleCollege} = useContext(JobIndex);

  const register = () => {
    history("/college-section");
    setSingleCollege(college)
  };
  return (
    <div className="flex flex-col text-center bg-white drop-shadow-college rounded-md w-[300px] min-h-[300px] justify-center items-center gap-3 p-3">
      <img
        src={college.logo_url}
        alt=""
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      <span className="text-base flex items-center font-medium justify-center">
        {college.name}
      </span>
      <button
        onClick={register}
        className="bg-purple-600 text-white py-2 px-5 font-medium text-base rounded-lg"
      >
        Register
      </button>
    </div>
  );
};

export default CollegeCard;
