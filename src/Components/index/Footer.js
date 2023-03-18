import React from "react";
import meIcon from "../assets/icons/meIcon.png";

export default function Footer() {
  return (
    <footer className="h-14 secondary-bg-color flex justify-center items-center w-full">
      <span className=" flex items-center text-neutral-200 text-xs tracking-wider font-extrabold">
        <img alt="" src={meIcon} className=" w-10 h-10" /> Alexander Mezquita
        -2023-
      </span>
    </footer>
  );
}
