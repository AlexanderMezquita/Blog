import React from "react";
import { Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Welcome() {
  return (
    <div className=" w-screen min-h-screen bg-slate-600 text-white grid  ">
      <div className=" text-center grid-cols-12 mt-auto mb-auto">
        <div className=" text-3xl">Welcome</div>
        <div className=" text-3xl lg:text-7xl">I am a web developer</div>
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
    </div>
  );
}
