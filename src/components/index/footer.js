import React from "react";
import meIcon from "../assets/icons/meIcon.png";

export default function Footer() {
  return (
    <footer className="h-14 secondary-bg-color  flex justify-center items-center w-full">
      <div className=" flex items-center tracking-wider ">
        <img alt="" src={meIcon} className=" w-10 h-10" />
        <h3 className="text-xs"> Alexander Mezquita -2023-</h3>
      </div>
    </footer>
  );
}
