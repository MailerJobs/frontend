import React, { useState } from "react";

const ClientRegister = (props) => {
  const [clientregisterdata, setClientRegisterData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    pincode: "",
    org_name: "",
  });

  console.log(clientregisterdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setClientRegisterData(() => {
      return {
        ...clientregisterdata,
        [name]: value,
      };
    });
  };

  return (
    <div className="bg-black w-screen h-screen bg-opacity-70 flex items-center justify-center">
      <div className="w-[500px] h-auto bg-white pt-7 pb-2  px-7 rounded-lg">
        <div className="flex justify-between mb-2">
          <h1 className="text-xl font-bold font-roboto">REGISTER</h1>
          <button onClick={props.changeFunc}>
            <img src="SVG/Cross-Logo.svg" alt="" className="w-4" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex gap-5">
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="first_name"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                onChange={adddata}
                value={clientregisterdata.first_name}
                name="first_name"
                id="first_name"
                className="h-10 border-input-border border-[2px] rounded-md
              bg-username-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-2"
              />
            </div>
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="last_name"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                onChange={adddata}
                value={clientregisterdata.last_name}
                name="last_name"
                id="last_name"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-username-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-3"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="username"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={adddata}
                value={clientregisterdata.username}
                name="username"
                id="username"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-username-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-2"
              />
            </div>
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="email"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={adddata}
                value={clientregisterdata.email}
                name="email"
                id="email"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-email-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-2"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="password"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={adddata}
                value={clientregisterdata.password}
                name="password"
                id="password"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-password-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-2"
              />
            </div>
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="password"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={adddata}
                value={clientregisterdata.confirm_password}
                name="confirm_password"
                id="confirm_password"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-password-input bg-no-repeat bg-[right_4px_top_4px] bg-[length:30px_30px] p-2"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="phone"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                onChange={adddata}
                value={clientregisterdata.phone}
                name="phone"
                id="phone"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-phone-input bg-no-repeat bg-[right_6px_top_6px] bg-[length:25px_25px] p-2"
              />
            </div>
            <div className="flex flex-col w-[300px] gap-1">
              <label
                htmlFor="pincode"
                className="font-roboto font-medium text-base text-login-register-label"
              >
                Pincode
              </label>
              <input
                type="text"
                placeholder="Enter Pincode"
                onChange={adddata}
                value={clientregisterdata.pincode}
                name="pincode"
                id="pincode"
                className="h-10 border-input-border border-[2px] rounded-md
                bg-pincode-input bg-no-repeat bg-[right_7px_top_7px] bg-[length:23px_25px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="org_name"
              className="font-roboto font-medium text-base text-login-register-label"
            >
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Enter Organization Name"
              onChange={adddata}
                value={clientregisterdata.org_name}
                name="org_name"
                id="org_name"
              className="h-10 border-input-border border-[2px] rounded-md
                bg-organization-input bg-no-repeat bg-[right_7px_top_7px] bg-[length:23px_25px] p-2"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <button className="bg-purple-button text-white font-roboto font-medium text-lg py-1 px-16 rounded-full">
            Sign Up
          </button>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <h3 className="font-medium font-roboto text-[#6B6B6B]">
            Already have an account?{" "}
            <strong className="text-[#284FFD]">Sign in</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClientRegister;
