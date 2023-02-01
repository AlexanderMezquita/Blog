import React from "react";
import { Twitter, Facebook, BlurCircular } from "@mui/icons-material";

export default function TopBar(props) {
  const Link = (props) => {
    return (
      <span className=" hover:text-green-300 hover:cursor-pointer">
        {props.title}
      </span>
    );
  };

  const Icons = (props) => {
    return (
      <div className={`hover:cursor-pointer ${props.color}`}>{props.icon}</div>
    );
  };

  return (
    <div
      className={`${props.color} h-18 text-white w-screen flex items-center justify-between p-2  top-0`}
    >
      <span className="p-4 text-lg ">Alexander</span>
      <div className=" space-x-20">
        <Link title="Home" />
        <Link title="About" />
        <Link title="What I do" />
        <Link title="Resume" />
        <Link title="Portfolio" />
        <Link title="Contact" />
      </div>
      <div className="flex space-x-4 p-4">
        <Icons icon={<Twitter />} color="hover:text-blue-500" />
        <Icons icon={<Facebook />} color="hover:text-blue-900" />
        <Icons icon={<BlurCircular />} color="hover:text-red-500" />
      </div>
    </div>
  );
}
