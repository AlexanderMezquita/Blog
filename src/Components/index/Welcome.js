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
import me from "../assets/me.png";
import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

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
    {
      name: "linkedin",
      icon: FileDownload,
      description: "Get my CV ",
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
          <div className="absolute -top-20 h-28 w-28  border-4 border-black  bg-[#0D1117] flex justify-center items-center rounded-full">
            <img alt="Alex" className=" h-28 w-28 " src={me} />
          </div>
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
                <p className=" underline hover:font-bold underline-offset-4 text-center lg:text-left mb-5">
                  alexmezsan@gmail.com
                </p>
              </a>
              <div className="flex flex-wrap justify-center md:justify-start w-full gap-5">
                {socialsIcons.map((item, index) => (
                  <a
                    href={item.href}
                    className=" cursor-pointer border-2 p-2  text-center  rounded-xl  hover:bg-white hover:text-black  border-white text-white"
                  >
                    {item.description}
                    <item.icon key={index} />
                  </a>
                ))}
              </div>
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
      </div>
    </section>
  );
}
