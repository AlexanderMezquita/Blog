import React from "react";

export default function Title(props) {
  return (
    <div className="flex flex-wrap mt-10 mb-5 md:p-3 lg:p-0 relative">
      <div className="absolute top-0 lg:-top-5 md:left-5 left-0 lg:left-5 h-32 ">
        <h1 className=" text-5xl sm:text-6xl md:text-7xl  font-bold dark:text-slate-500/30 text-slate-700/20">
          {props.backTitle}
        </h1>
      </div>
      <div className="w-full lg:w-1/2  p-5 lg:border-l-4 border-slate-700 relative md:pl-9 pl-0 ">
        <h1 className=" text-4xl lg:text-5xl font-bold ">{props.title}</h1>
        <p className=" text-2xl dark:text-slate-500 text-slate-500">
          {props.description}
        </p>
      </div>
    </div>
  );
}
