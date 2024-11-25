import React from "react";
import { links } from "../../Data/Social-Links/Links";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-footer-back">
        <div className="flex justify-center gap-5 py-5 ">
          {links.map((e) => {
            return <img src={e.icon} alt="" className="w-6" />;
          })}
        </div>
      </div>
      <div className="bg-purple-button flex flex-col gap-10 items-center  text-white font-inter pt-5">
        <div className="flex justify-around w-full">
          <div>
            <h1 className="text-2xl font-semibold mb-4">MAILER JOBS</h1>
            <p className="w-64 text-lg">
              MailerJobs is a job portal that is fast growing among job seekers
              as a quick responsive platform in their job search.
            </p>
          </div>
          <div>
            <h1 className="font-medium text-2xl">Useful Links</h1>
            <div className="w-20 h-[3px] bg-line" />
            <div className="mt-4">
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                Home
              </div>
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                Jobs
              </div>
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                Blog
              </div>
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                Privacy Policy
              </div>
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                Terms & Condition
              </div>
              <div className="flex text-xl">
                <img src="public/SVG/Right-Arrow.svg" alt="" className="w-3" />
                User Dashboard
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium text-2xl">Contact Us</h1>
            <div className="w-20 h-[3px] bg-line" />

            <div className="flex items-start mt-4 text-lg">
              <img
                src="public/SVG/Footer/location.svg"
                alt=""
                className="w-4 mt-[6px] mr-3"
              />
              <p className="w-56">
                Mailer Jobs No.182, 1st Floor, 2nd Main, K G Layout, New BEL
                Road, Bengaluru - 560094
              </p>
            </div>
            <div className="flex text-lg">
              <img
                src="public/SVG/Footer/phone.svg"
                alt=""
                className="w-4 mr-3"
              />
              +91 - 9884696024
            </div>
            <div className="flex text-lg">
              <img
                src="public/SVG/Footer/mail.svg"
                alt=""
                className="w-4 mr-3"
              />
              sathish@nextlearn.in
            </div>
          </div>
        </div>
        <div className="font-inter font-thin">Mailerjobs © 2024, All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
