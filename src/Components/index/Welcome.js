import React from "react";
import { Button, Avatar } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import js from "../assets/js-logo.svg";

export default function Welcome() {
  return (
    <section
      className=" w-screen min-h-screen max-h-screen bg-black text-white p-20 pt-52"
      id="home"
    >
      <div className="max-w-5xl ml-auto mr-auto">
        <div className="  flex flex-col items-center justify-center z-10 bg-[#0D1117]  p-5 relative rounded-xl  ">
          <div className="absolute -top-20 ">
            <Avatar
              alt="Alex"
              sx={{ width: 100, height: 100 }}
              src="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
            />
          </div>
          <h1 className=" text-3xl">Welcome</h1>
          <p className=" text-3xl lg:text-7xl">I'm Alex</p>
          <p className=" text-4xl">based on Dominican Republic</p>

          <img alt="" src={js} className="w-14 h-14"></img>
        </div>

        {/* <div className="flex items-center justify-center mt-6">
          <Button variant="outlined" size="large">
            Hire Me!
          </Button>
        </div> */}
        {/* <div className="absolute bottom-4 left-2/4 -ml-2  hover:cursor-pointer">
          <KeyboardArrowDown fontSize="large" />
        </div> */}
      </div>
    </section>
  );
}
