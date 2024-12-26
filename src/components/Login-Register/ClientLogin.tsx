// @ts-nocheck
import React, { useContext, useState } from "react";
import { JobIndex } from "../context/job_list_context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_POST, API_POST_LOGIN } from "../../utils/api_structure";

const ClientLogin = (props) => {
  const {
    candidateid,
    setCandidateId,
    token,
    setToken,
    clientLogin,
    setClientLogin,
    clientid,
    setClientId,
  } = useContext(JobIndex);
  const [logdata, setLogData] = useState({
    email: "",
    password: "",
  });

  // console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setLogData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  async function clientDetailsById(client_id) {
    const URL = `client/${client_id}`;
    const { result, status } = await API_POST(URL, "clientId");
    setClientId(result);
    console.log(JSON.stringify(result));
  }

  async function senddata() {
    const URL = "client-login";
    const { result, status } = await API_POST_LOGIN(URL, logdata);
    if (status == 200) {
      toast.success("Logged In", {
        position: "top-center",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
      });
      const clientId = JSON.stringify(result["client_id"]);
      // console.log(JSON.stringify(result["client_id"]));
      clientDetailsById(clientId);
      setClientLogin(true);
      props.changeFunc();
      localStorage.setItem("client-id", JSON.stringify(result["client_id"]));
      localStorage.setItem("client-token", JSON.stringify(result["token"]));
      setToken(JSON.stringify(result["token"]));
      // console.log("Login C T: " + JSON.stringify(result["token"]));
    } else if (status == 422) {
      toast.warn("Email-Password is Required", {
        position: "top-center",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      toast.error("Invalid details", {
        position: "top-center",
      });
    }
  }
  // console.log(userLogin);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-[470px] h-[400px] bg-white p-7 flex flex-col gap-5 rounded-lg">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl font-bold font-roboto">EMPLOYER LOGIN</h1>
          <button onClick={props.changeFunc}>
            <img src="SVG/Cross-Logo.svg" alt="" className="w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-roboto font-medium text-lg text-login-register-label"
            >
              Username or Email
            </label>
            <input
              type="text"
              placeholder="Enter Username or Email"
              onChange={adddata}
              value={logdata.email}
              name="email"
              id="email"
              className="h-10 rounded-md p-3 bg-username-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] border-[2px] border-input-border focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-roboto font-medium text-lg text-login-register-label"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={adddata}
              value={logdata.password}
              name="password"
              id="password"
              className="h-10 rounded-md p-3 bg-password-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] border-[2px] border-input-border focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <button
              onClick={senddata}
              className="px-5 py-2 bg-purple-button text-lg rounded-full font-medium font-roboto text-white "
            >
              Sign In
            </button>
            <a href="" className="font-medium font-roboto text-[#5C5C5C]">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <h3 className="font-medium font-roboto text-[#6B6B6B]">
            Don't have an account?{" "}
            <strong className="text-[#284FFD]">Sign In</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;