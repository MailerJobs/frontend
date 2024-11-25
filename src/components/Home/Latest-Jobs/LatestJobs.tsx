import React, { useEffect, useState } from "react";
import { Jobs } from "../../../Data/Jobs";
import Carousel from "react-material-ui-carousel";
import Job from "./Jobs-grid/Job";
import { splitArray2 } from "../../../utils/split";

const LatestJobs = () => {
  const [latest_jobs, setLatestJobs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/latest_jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLatestJobs(data);
      })
      .catch((error) => {
        console.log("Api Latest Error:" + error);
      });
  }, []);

  console.log("latest_jobs = " + JSON.stringify(latest_jobs));

  // const [array1, array2] = latest_jobs.filter(
  //   ([arr1, arr2], item, index) => {
  //     if (index % 2 === 0) {
  //       arr1.push(item);  // Add to first array for even indices
  //     } else {
  //       arr2.push(item);  // Add to second array for odd indices
  //     }
  //     return [arr1, arr2];
  //   },
  //   [[], []]  // Initial value with two empty arrays
  // );

  // let [array1, array2] = splitArray2(latest_jobs);

  // console.log("array1 = " + JSON.stringify(array1));
  // console.log("array2 = " + JSON.stringify(array2));


  // console.log(Array.isArray(Jobs));

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
      indicators={false}
      duration={650}
      className="w-[1000px] flex justify-center items-center mt-10"
    >
      {/* <div className="flex gap-5 justify-center">
        {array1.map((e) => {
          return (
            <div className="">
              <Job element={e} />
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 justify-center">
        {array2.map((e) => {
          return (
            <div className="">
              <Job element={e} />
            </div>
          );
        })}
      </div> */}
      {
        latest_jobs.map((e) => {
          return (
            <div className="flex flex-row justify-center">
              <Job element={e} />
            </div>
          )
        })
      }
    </Carousel>
  );
};

export default LatestJobs;
