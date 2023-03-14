import React from "react";
import { Button, Avatar } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Welcome() {
  return (
    <section
      className=" w-screen h-screen bg-[#283747] text-white grid "
      id="home"
    >
      <div className=" text-center flex flex-col items-center mt-auto mb-auto">
        <Avatar
          alt="Alex"
          sx={{ width: 56, height: 56 }}
          src="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
        />
        <div className=" text-3xl">Welcome</div>
        <div className=" text-3xl lg:text-7xl">I'm Alex</div>
        <div className=" text-4xl">based on Dominican Republic</div>

        <div className="flex items-center justify-center mt-6">
          <Button variant="outlined" size="large">
            Hire Me!
          </Button>
        </div>
        <div className="absolute bottom-4 left-2/4 -ml-2  hover:cursor-pointer">
          <KeyboardArrowDown fontSize="large" />
        </div>
      </div>
    </section>
  );
}
