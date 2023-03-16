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
      <ul className=" z-50 bg-black bg-opacity-95 text-white  flex-col justify-between p-3 border-spacing-3 w-screen  flex sm:hidden">
        <Link
          title="Home"
          href="#home"
          classes="border-neutral-800 border-b-2 p-4"
        />
        <Link
          title="Portfolio"
          href="#portfolio"
          classes="border-neutral-800  border-b-2 p-4"
        />
        <Link title="Contact " href="#contact" classes="p-4" />
      </ul>
    );
  };

  const Link = (props) => {
    return (
      <li
        className={`${props.classes} hover:text-green-300 hover:cursor-pointer`}
      >
        <a href={`${props.href}`}>{props.title}</a>
      </li>
    );
  };

  const Icons = (props) => {
    return (
      <div className={`hover:cursor-pointer ${props.color}`}>
        <a href={`${props.link}`}>{props.icon} </a>
      </div>
    );
  };

  return (
    <nav
      className={` fixed top-0 min-w-full  ${props.bgcolor} ${props.position} h-16 `}
    >
      <div
        className={`  text-white flex  items-center justify-between p-2 max-w-screen-2xl m-auto   `}
      >
        <h3 className="p-4 ">Alexander</h3>
        <ul className=" space-x-20 hidden lg:flex ">
          <Link title="Home" href="#home" />
          {/* <Link title="About" />
          <Link title="What I do" />
          <Link title="Resume" /> */}
          <Link title="Portfolio" href="#portfolio" />
          <Link title="Contact" href="#contact" />
        </ul>
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
              link="https://twitter.com/?lang=en"
            />
            <Icons
              icon={<FacebookRounded />}
              color="hover:text-blue-800 md:flex hidden"
              link="https://www.facebook.com/"
            />
            <Icons
              icon={<BlurCircular />}
              color="hover:text-red-500 md:flex hidden"
              link="https://github.com/"
            />
          </div>
        </div>
      </div>
      {props.showDropdown && <DropDown />}
    </nav>
  );
}
