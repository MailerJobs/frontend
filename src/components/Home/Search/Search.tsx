// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import SearchLocation from "./SearchLocation";
import { JobIndex } from "../../context/job_list_context";
import { experience } from "../../../Data/Jobs/Categories/Cat_data";
import { API_POST,API_GET } from "../../../utils/api_structure";
import { log } from "console";

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

const Search = () => {

  const [searchKeywords, setSearchKeywords] = useState<Job>([]);

  const {
    selectedOptionlocationSearch,
    setSelectedOptionlocationSearch,
    selectedOptionexperienceSearch,
    setSelectedOptionexperienceSearch,
    selectedOptionquerySearch,
    setSelectedOptionquerySearch,
    jobdata,
    setJobs,
    job_index,
    setJobIndex,
    searchDataFilters,
    setSearchDatafilters,
  } = useContext(JobIndex);


  const [city, setCity] = useState([]);

  const addData = (name, value) => {
    setSearchDatafilters(() => {
      return {
        ...searchDataFilters,
        [name]: value,
      };
    });
  };

  async function sendata(e) {
    const URL = "http://127.0.0.1:5000/searchbarjobs";
    const { result, status } = await API_POST(URL, searchDataFilters);
    setJobs(result);
    setJobIndex(result[0]);
  }

  async function search() {
    const URL = "http://127.0.0.1:5000/searchjobs";
    const { result, status } = await API_GET(URL);
    setSearchKeywords(result);
    console.log(JSON.stringify(result));
    
  }

  const jsonData = searchKeywords.flatMap((item, index) => [
    { value: index * 2 + 1, label: item.job_title }, // Add job_title with odd ID
    { value: index * 2 + 2, label: item.job_org }, // Add job_org with even ID
  ]);

  const country = {
    country: "india",
  };

  async function cityData() {
    const URL = "https://countriesnow.space/api/v0.1/countries/cities";
    const { result, status } = await API_POST(URL,country);
    setCity(result);
  }

  useEffect(() => {
    cityData();
    search();
  }, []);

  delete city["error"];
  delete city["msg"];

  let newarr = city["data"];
  var result;

  if (Array.isArray(newarr)) {
    result = newarr.map((item, index) => ({
      value: index + 1,
      label: item,
    }));
  } else {
    console.error("newarr is not an array or is undefined.");
  }

  return (
    <div className=" bg-white rounded-full px-6 py-2 flex items-center w-[920px]">
      <img src="SVG/Search.svg" alt="" className="h-8 mr-2" />
      <div className="ml-2 flex items-center justify-center">
        <div className="w-[300px]">
          <SearchLocation
            options={jsonData}
            name={"Companies/Designation"}
            selectedOption={selectedOptionquerySearch}
            setSelected={setSelectedOptionquerySearch}
            onchange={addData}
            id={"searchQuery"}
          />
        </div>
        <div className="h-8 w-[1px] bg-slate-300 mx-3 text-gra" />
        <div className="w-[160px]">
          <SearchLocation
            options={experience}
            name={"Experience"}
            selectedOption={selectedOptionexperienceSearch}
            setSelected={setSelectedOptionexperienceSearch}
            onchange={addData}
            id={"experience"}
          />
        </div>
        <div className="h-8 w-[1px] bg-slate-300 mx-3" />
        <div className="w-[180px]">
          <SearchLocation
            options={result}
            name={"Location"}
            selectedOption={selectedOptionlocationSearch}
            setSelected={setSelectedOptionlocationSearch}
            onchange={addData}
            id={"location"}
          />
        </div>
      </div>
      <div>
        <button
          onClick={sendata}
          className="bg-purple-button text-white px-10 pt-1 pb-2 rounded-full text-2xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
