import React from "react";
import { Button } from "@mui/material";

export default function Welcome() {
  return (
    <div className=" h-screen w-screen bg-slate-600 text-blue-800 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className=" text-3xl">Welcome</div>
        <div className=" text-7xl">I am a web developer</div>
        <div className=" text-4xl">based on Dominican Republic</div>

        <div className="flex items-center justify-center mt-6">
          <Button variant="outlined" size="large">
            Hire Me!
          </Button>
        </div>
      </div>
    </div>
  );
}
