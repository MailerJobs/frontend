// @ts-nocheck
import React, { createContext, useState } from "react";
export const JobIndex = createContext();

const ContextProvider = ({ children }) => {
  const [job_index, setJobIndex] = useState("");
  const [skill, setSkill] = useState([]);
  const [selectedOptionlocation, setSelectedOptionlocation] = useState("");
  const [selectedOptionDate, setSelectedOptionDate] = useState("");
  const [selectedOptionExperience, setSelectedOptionExperience] = useState("");
  const [selectedOptionSector, setSelectedOptionSector] = useState("");
  const [selectedOptionType, setSelectedOptionType] = useState("");
  const [selectedOptionSkill, setSelectedOptionSkill] = useState("");
  const [job_Data, setData] = useState([]);
  const [jobdata, setJobs] = useState<Job[]>([]);
  const [selectedOptionlocationSearch, setSelectedOptionlocationSearch] =
    useState("");
  const [selectedOptionexperienceSearch, setSelectedOptionexperienceSearch] =
    useState("");
  const [selectedOptionquerySearch, setSelectedOptionquerySearch] =
    useState("");
  const [searchDataFilters, setSearchDatafilters] = useState({
    searchQuery: "",
    location: "",
    experience: "",
  });
  const [userLogin,setUserLogin] = useState(false);

  return (
    <>
      <JobIndex.Provider
        value={{
          job_index,
          setJobIndex,
          skill,
          setSkill,
          selectedOptionlocation,
          setSelectedOptionlocation,
          selectedOptionDate,
          setSelectedOptionDate,
          selectedOptionExperience,
          setSelectedOptionExperience,
          selectedOptionSector,
          setSelectedOptionSector,
          selectedOptionType,
          setSelectedOptionType,
          selectedOptionSkill,
          setSelectedOptionSkill,
          job_Data,
          setData,
          jobdata,
          setJobs,
          selectedOptionlocationSearch,
          setSelectedOptionlocationSearch,
          selectedOptionexperienceSearch,
          setSelectedOptionexperienceSearch,
          selectedOptionquerySearch,
          setSelectedOptionquerySearch,
          searchDataFilters,
          setSearchDatafilters,
          userLogin,
          setUserLogin
        }}
      >
        {children}
      </JobIndex.Provider>
    </>
  );
};

export default ContextProvider;
