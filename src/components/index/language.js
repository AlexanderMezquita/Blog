import React from "react";
import france from "../assets/icons/france.svg";
import england from "../assets/icons/england.svg";

export default function Languague(props) {
  return (
    <div className="flex justify-center items-center   ">
      <div
        className={` ${
          props.active === "en" ? " bg-black dark:bg-white" : ""
        } p-1 border-r-0 rounded-l-xl cursor-pointer dark:hover:text-black dark:hover:bg-white border-2
        dark:border-white border-black text-black hover:text-white hover:bg-black dark:text-white transition-all duration-300`}
        onClick={() => props.changeLanguage("en")}
      >
        <img alt="" src={england} className="w-7 h-7" />
      </div>
      <div
        className={` ${
          props.active === "fr" ? " bg-black dark:bg-white" : ""
        } p-1 rounded-r-xl cursor-pointer dark:hover:text-black dark:hover:bg-white border-2
        dark:border-white border-black text-black hover:text-white  hover:bg-black dark:text-white transition-all duration-300`}
        onClick={() => props.changeLanguage("fr")}
      >
        <img alt="" src={france} className="w-7 h-7" />
      </div>
    </div>
  );
}
