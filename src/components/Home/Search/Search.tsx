import React from "react";

const Search = () => {
  return (
    <div className=" bg-white rounded-full px-6 py-2 flex items-center w-[810px]">
      <img src="SVG/Search.svg" alt="" className="h-8 mr-2" />
      <div className="ml-2 flex items-center justify-center">
        <input
          type="text"
          placeholder="Skills / Companies / Designation"
          className="h-10 w-[300px] focus:text-xl enabled:text-xl
             focus:border-0 focus:outline-none"
        />
        <div className="h-8 w-[1px] bg-slate-300 mx-3"/>
        <input
          type="text"
          placeholder="Experience"
          className="h-10 w-[110px] focus:text-xl enabled:text-xl 
              focus:border-0 focus:outline-none"
        />
        <div className="h-8 w-[1px] bg-slate-300 mx-3"/>
        <input
          type="text"
          placeholder="Location"
          className="h-10 w-[110px] focus:text-xl enabled:text-xl 
              focus:border-0 focus:outline-none"
        />
      </div>
      <div>
        <button className="bg-purple-button text-white px-10 pt-1 pb-2 rounded-full text-2xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
