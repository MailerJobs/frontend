// @ts-nocheck
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { JobIndex } from '../components/context/job_list_context';
import CollegeCard from '../components/college/college-card';
import { API_GET } from '../utils/api_structure';

const CollegePage = () => {

  async function colleges() {
    const URL = "colleges";
    const { result,status } = await API_GET(URL);
    setCollegeDetails(result);
  }

  
  const {collegeDetails, setCollegeDetails} = useContext(JobIndex)

  useEffect(() => {
    colleges();
  },[])

  console.log(JSON.stringify(collegeDetails));
  

  return (
    <div className='flex gap-5 flex-wrap justify-center m-3'>
      {
        collegeDetails.map((college, key) => {
           return (
            <CollegeCard key={key} college={college} />
           )
        })
      }
    </div>
  )
}

export default CollegePage