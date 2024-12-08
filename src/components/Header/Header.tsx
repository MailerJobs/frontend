// @ts-nocheck
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { JobIndex } from "../context/job_list_context";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
import ClientRegister from "../Login-Register/ClientRegister";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { colors } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_POST_AUTH } from "../../utils/api_structure";

const Header = () => {
  const {
    selectedOptionlocationSearch,
    setSelectedOptionlocationSearch,
    selectedOptionexperienceSearch,
    setSelectedOptionexperienceSearch,
    selectedOptionquerySearch,
    setSelectedOptionquerySearch,
    searchDataFilters,
    setSearchDatafilters,
    userLogin,
    setUserLogin,
  } = useContext(JobIndex);

  

  const reset = () => {
    setSelectedOptionlocationSearch("");
    setSelectedOptionquerySearch("");
    setSelectedOptionexperienceSearch("");
    setSearchDatafilters(() => {
      return {
        ...searchDataFilters,
        ["searchQuery"]: "",
        ["location"]: "",
        ["experience"]: "",
      };
    });
  };

  const [loginview, setLoginView] = useState("hidden");
  const [registerview, setRegisterView] = useState("hidden");
  const [clientregisterview, setClientRegisterView] = useState("hidden");
  const [profileview, setProfileView] = useState("hidden");

  const changeLoginView = () => {
    if (loginview === "hidden") {
      setLoginView("fixed");
    } else if (loginview === "fixed") {
      setLoginView("hidden");
    }
  };

  const changeRegisterView = () => {
    if (registerview === "hidden") {
      setRegisterView("fixed");
    } else if (registerview === "fixed") {
      setRegisterView("hidden");
    }
  };

  const changeClientRegisterView = () => {
    if (clientregisterview === "hidden") {
      setClientRegisterView("fixed");
    } else if (clientregisterview === "fixed") {
      setClientRegisterView("hidden");
    }
  };

  const changeProfileView = () => {
    if (profileview === "hidden") {
      setProfileView("fixed");
    } else if (profileview === "fixed") {
      setProfileView("hidden");
    }
  };

  // const logout = async () => {
  //   // e.preventDefaults()
  //   const res = await fetch("http://127.0.0.1:5000/logout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
    
  //   // console.log(localStorage.getItem("token"));
  //   if (res.status == 200) {
  //     toast.warn("Candidate Logged Out", {
  //       position: "top-center",
  //       theme: "light",
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //     });
  //     localStorage.removeItem("token");
  //     setUserLogin(false);
  //   } else {
  //     toast.error("Invalid details", {
  //       position: "top-center",
  //     });
  //   }
  // };

  async function logout() {
    const URL = "http://127.0.0.1:5000/logout";
    const token = localStorage.getItem("token");
    const { result, status } = await API_POST_AUTH(URL,"logout",token);

    if (status == 200) {
      toast.warn("Candidate Logged Out", {
        position: "top-center",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
      });
      localStorage.removeItem("token");
      setUserLogin(false);
    } else {
      toast.error("Invalid details", {
        position: "top-center",
      });
    }
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutButton = () => {
    setAnchorEl(null);
    logout();
  }

  useEffect(() => {
    if (localStorage.getItem('token') == undefined) {
      setUserLogin(false)
    }
  })

  return (
    <div className="relative">
      <nav className="flex justify-between p-6">
        <div className="flex flex-row">
          <img src="MJ-logo 1.jpg" alt="" className="w-[70px]" />
          <div className="flex items-center gap-10 ml-8 text-xl">
            <NavLink to="/home">
              <div onClick={reset}>Home</div>
            </NavLink>
            <NavLink to="/jobs">
              <div onClick={reset}>Jobs</div>
            </NavLink>
            <div>Blog</div>
          </div>
        </div>
        <div className="flex items-center">
          {userLogin ? (
            <div>
              <Button
                id="account-btn"
                aria-controls={open ? "account-btn" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={
                  {backgroundColor: 'purple',
                    color:'white',
                    borderRadius: "20px",
                    paddingX: "20px",
                    fontWeight: "bold"
                  }
                }
              >
                Account
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={logoutButton}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <div className="flex gap-3">
                <button
                  onClick={changeLoginView}
                  className="hover:shadow-purple-buttons rounded-full text-lg pb-[6px] pt-1 px-6 border-purple-button border-solid border-[1px]"
                >
                  Login
                </button>
                <button
                  onClick={changeRegisterView}
                  className="rounded-full text-lg pb-[6px] pt-1 px-6 bg-purple-button text-white"
                >
                  Register
                </button>
              </div>
              <div className="h-10 w-[1px] bg-slate-400"></div>
              <div
                className="text-lg cursor-pointer"
                onClick={changeClientRegisterView}
              >
                For employers
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className={`${loginview}  top-[-1px] z-30`}>
        <Login changeFunc={changeLoginView} />
      </div>
      <div className={`${registerview} top-[-1px] z-30`}>
        <Register changeFunc={changeRegisterView} />
      </div>
      <div className={`${clientregisterview} top-[-1px] z-30`}>
        <ClientRegister changeFunc={changeClientRegisterView} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
