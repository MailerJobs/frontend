// @ts-nocheck
import React, { useContext, useRef } from "react";
import { JobIndex } from "../context/job_list_context";
import { API_POST, API_POST_PIC } from "../../utils/api_structure";

const ClientLeftSection = () => {
  const { clientprofiletype, setClientProfileType, clientid, setClientId } =
    useContext(JobIndex);

  // console.log(clientid);

  const fileInputRef = useRef(null);

  const handleButtonClikc = () => {
    fileInputRef.current.click();
  };

  async function getClientsDetails() {
    const URL = `client/${clientid["id"]}`;
    const { result, status } = await API_POST(URL, "details");
    setClientId(result);
  }

  async function putFile(formData) {
    const URL = "upload_comapny_logo";
    const { result, status } = await API_POST_PIC(URL, formData);
    console.log(JSON.stringify(result));
    getClientsDetails();
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("client_id", clientid["id"]);

    putFile(formData);
    // console.log(formData.values());
  };

  const Click = (type) => {
    setClientProfileType(type);
  };
  return (
    <div className="bg-white w-[300px]">
      <div className="w-full flex flex-col items-center gap-5 p-3 border-x-[1px] border-t-[1px]">
        <img
          src={
            clientid["logo_url"]
              ? `uploads/company_logo/${clientid["logo_url"]}`
              : "ProfilePic.png"
          }
          className="w-[180px] h-[180px] rounded-full object-contain border-[1px]"
        />
        <button
          onClick={handleButtonClikc}
          className="ease-in-out duration-500 hover:bg-purple-button hover:text-white text-purple-button rounded-full px-5 py-2 font-inter font-medium border-purple-button border-[2px] border-solid"
        >
          Upload Photo
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <h1 className="font-roboto text-2xl font-semibold">{clientid["company_name"]}</h1>
      </div>
      <div className="flex flex-col text-gray-900 text-lg">
        <button
          onClick={() => Click("profile")}
          className="ease-in-out duration-500 focus:text-purple-button border-t-[1px] border-x-[1px] p-2 hover:text-purple-button cursor-pointer"
        >
          Profile
        </button>
        <button
          onClick={() => Click("jobs")}
          className="ease-in-out duration-500 focus:text-purple-button border-t-[1px] border-x-[1px] p-2 hover:text-purple-button cursor-pointer"
        >
          Jobs
        </button>
        <button
          onClick={() => Click("post-job")}
          className="ease-in-out duration-500 focus:text-purple-button border-t-[1px] border-x-[1px] p-2 hover:text-purple-button cursor-pointer"
        >
          Post Job
        </button>
        <button
          onClick={() => Click("cp")}
          className="ease-in-out duration-500 focus:text-purple-button border-y-[1px] border-x-[1px] p-2 hover:text-purple-button cursor-pointer"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ClientLeftSection;
