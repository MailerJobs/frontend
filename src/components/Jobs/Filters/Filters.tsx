import React, { useEffect, useState } from "react";
import { filtersData } from "../../../Data/Jobs/Categories/Cat_data";
import Select from "react-dropdown-select";

const Filters = () => {
  const [city, setCity] = useState([]);

  const country = {
    country: "india",
  };

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCity(data);
      })
      .catch((error) => {
        console.log("Api Latest Error:" + error);
      });
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
    // console.log(JSON.stringify(result));
  } else {
    // console.error("newarr is not an array or is undefined.");
  }

  // console.log(JSON.stringify(result));

  const [value,setValue] = useState([]);

  return (
    <div className="flex  w-full h-20 items-center justify-around">
      {/* <div className="w-[200px] drop-shadow-job_filters">
            {/* <Select
              options={result}
              name="location"
              values={[]}
              valueField="value"
              labelField="label"
              onChange={value => setValue(value)}
              className="bg-white text-black  "
              placeholder="Location"
              style={
                {
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "black",
                }
              }
              color="none"
            />
          </div> */} 
      {filtersData.map((e) => {
        return (
          <div
            className="flex justify-center items-center
            px-8 gap-3 h-10 bg-white rounded-xl drop-shadow-job_filters"
          >
            <div className="font-inter font-medium w-28 flex justify-center">
              {e.name}
            </div>
            <img src={e.icon} alt="" className="w-9 " />
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Filters;
