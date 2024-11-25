// @ts-nocheck
import React,{ createContext, useState} from 'react';
export const JobIndex = createContext(null);

const ContextProvider = ( {children}) => {

    const [job_index,setJobIndex]  = useState("");

  return <>
    <JobIndex.Provider value={{job_index,setJobIndex}}>
        {children}
    </JobIndex.Provider>
  </>;
};

export default ContextProvider;