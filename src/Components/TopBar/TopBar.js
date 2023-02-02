import React from "react";
import {
  Twitter,
  FacebookRounded,
  BlurCircular,
  MenuRounded,
} from "@mui/icons-material";

export default function TopBar(props) {
  const DropDown = () => {
    return (
      <div className=" h-64 bg-black text-white  flex-col spacy justify-between p-3 border-spacing-3 w-screen  flex sm:hidden">
        <Link title="Home" classes=" border-neutral-800 border-b-2 p-1" />
        <Link title="About" classes="border-neutral-800 border-b-2 p-1" />
        <Link title="What I do" classes="border-neutral-800 border-b-2 p-1" />
        <Link title="Resume" classes="border-neutral-800 border-b-2 p-1" />
        <Link
          title="Portfolio"
          classes="  border-neutral-800  border-b-2 p-1"
        />
        <Link title="Contact " classes="p-1" />
      </div>
    );
  };

  const Link = (props) => {
    return (
      <span
        className={`${props.classes} hover:text-green-300 hover:cursor-pointer`}
      >
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
    <div className={`flex flex-col fixed top-0 w-screen ${props.classes}`}>
      <div
        className={` h-18 text-white  flex items-center justify-between p-2  `}
      >
        <span className="p-4 text-lg ">Alexander</span>
        <div className=" space-x-20 hidden lg:flex ">
          <Link title="Home" />
          <Link title="About" />
          <Link title="What I do" />
          <Link title="Resume" />
          <Link title="Portfolio" />
          <Link title="Contact" />
        </div>
        <div>
          <div className=" space-x-4 p-4 flex  ">
            <div
              className="flex sm:hidden"
              onClick={() => {
                props.setShowDropdown(!props.showDropdown);
              }}
            >
              <Icons icon={<MenuRounded />} />
            </div>
            <Icons
              icon={<Twitter />}
              color="hover:text-blue-500 md:flex hidden"
            />
            <Icons
              icon={<FacebookRounded />}
              color="hover:text-blue-800 md:flex hidden"
            />
            <Icons
              icon={<BlurCircular />}
              color="hover:text-red-500 md:flex hidden"
            />
          </div>
        </div>
      </div>
      {props.showDropdown && <DropDown />}
    </div>
  );
}
