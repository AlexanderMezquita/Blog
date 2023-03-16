import React from "react";
import { Button, Avatar } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import js from "../assets/js-logo.svg";
import next from "../assets/next.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import redux from "../assets/redux.svg";
import git from "../assets/git.svg";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Welcome() {
  const skillsIcons = [
    { name: "javascript", src: js },
    { name: "next", src: next },
    { name: "tailwind", src: tailwind },
    { name: "react", src: react },
    { name: "html", src: html },
    { name: "css", src: css },
    { name: "redux", src: redux },
    { name: "git", src: git },
  ];

  const socialsIcons = [
    {
      name: "github",
      icon: GitHub,
      href: "https://github.com/AlexanderMezquita",
    },
    {
      name: "linkedin",
      icon: LinkedIn,
      // href: "https://github.com/AlexanderMezquita",
    },
  ];

  const SkillsCloud = (props) => (
    <li>
      <img alt="" src={props.src} className="w-14 h-14"></img>
    </li>
  );

  return (
    <section
      className=" w-screen min-h-screen  bg-black text-white p-10 pt-52"
      id="home"
    >
      <div className="max-w-5xl ml-auto mr-auto relative">
        <div className="  flex flex-col items-center z-10 bg-[#0D1117]  p-10  rounded-xl  ">
          <Avatar
            alt="Alex"
            sx={{
              width: 100,
              height: 100,
              position: "absolute",
              top: "-5rem",
            }}
            src="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <h2 className=" text-center lg:text-left">Hi, I'm Alex</h2>
              <h4 className="mb-5 text-center lg:text-left">
                Front-End Web Developer
              </h4>
              <p className="text-slate-200 text-center lg:text-left">
                I am a full stack web developer based in Dominican Republic with
                experience developing applications in Asp.net Core and vuejs.|
              </p>
              <h3 className="mt-5 mb-2 text-center lg:text-left">Contact</h3>
              <a href="mailto:alexmezsan@gmail.com">
                <p className="underline hover:font-bold underline-offset-4 text-center lg:text-left mb-5">
                  alexmezsan@gmail.com
                </p>
              </a>
              {socialsIcons.map((item, index) => (
                <a href={item.href}>
                  <item.icon
                    key={index}
                    sx={{ width: "50px", height: "50px" }}
                    className=" cursor-pointer border-2 p-2 mr-5 rounded-xl hover:bg-white hover:text-black  border-white text-white"
                  />
                </a>
              ))}
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="mb-5 text-center lg:text-left">My skills cloud</h2>
              <ul className="flex flex-wrap gap-2 ">
                {skillsIcons.map((item, index) => (
                  <SkillsCloud key={index} src={item.src} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-6">
          <Button variant="outlined" size="large">
            Hire Me!
          </Button>
        </div> */}
        {/* <div className="absolute bottom-4 left-2/4 -ml-2  hover:cursor-pointer">
          <KeyboardArrowDown fontSize="large" />
        </div> */}
      </div>
    </section>
  );
}
