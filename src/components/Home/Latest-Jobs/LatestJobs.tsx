// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Jobs } from "../../../Data/Jobs";
import Carousel from "react-material-ui-carousel";
import Job from "./Jobs-grid/Job";
import { splitArray2 } from "../../../utils/split";
import { API_GET } from "../../../utils/api_structure";

const LatestJobs = () => {
  const [latest_jobs, setLatestJobs] = useState([]);

  async function latestJobs() {
    const URL = "latest_jobs";
    const {result,status} = await API_GET(URL);
    setLatestJobs(result);
  }

  useEffect(() => {
    latestJobs();
  }, []);

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
      indicators={false}
      duration={650}
      className="w-[1000px] flex justify-center items-center mt-10"
    >
      {
        latest_jobs.map((e,key) => {
          return (
            <div key={key} className="flex flex-row justify-center">
              <Job element={e} />
            </div>
          )
        })
      }
    </Carousel>
  );
};

export default LatestJobs;
