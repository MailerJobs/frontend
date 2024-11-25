import * as React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between p-6">
      <div className="flex flex-row">
        <img src="MJ-logo 1.jpg" alt="" className="w-[70px]" />
        <div className="flex items-center gap-10 ml-8 text-xl">
          <div>Home</div>
          <div>Jobs</div>
          <div>Blog</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <button className="rounded-full text-lg pb-[6px] pt-1 px-6 border-purple-button border-solid border-[1px]">
            Login
          </button>
          <button className="rounded-full text-lg pb-[6px] pt-1 px-6 bg-purple-button text-white">
            Register
          </button>
        </div>
        <div className="h-10 w-[1px] bg-slate-400"></div>
        <div className="text-lg">For employers</div>
      </div>
    </nav>
  );
};

export default Header;
