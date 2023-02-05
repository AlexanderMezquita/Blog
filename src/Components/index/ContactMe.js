import React from "react";

export default function ContactMe() {
  return (
    <div className="w-screen min-h-screen bg-slate-900">
      <div className=" relative ">
        <div className=" absolute top-32 flex justify-center items-center w-screen ">
          <span className="text-white tracking-wider text-8xl uppercase opacity-5">
            Contact
          </span>
        </div>
        <div className=" absolute top-40 flex justify-center items-center w-screen ">
          <span className="text-white text-3xl underline-offset-8 underline ">
            Get in touch
          </span>
        </div>
      </div>

      <div className="  top-64 relative flex flex-col">
        <div className="flex flex-col">
          <div>Send me a note</div>
          <div>
            {" "}
            <input />
          </div>
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
}
