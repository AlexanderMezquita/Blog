import React from "react";
import { useTranslation } from "react-i18next";
import js from "../assets/icons/js-logo.svg";
import next from "../assets/icons/next.svg";
import tailwind from "../assets/icons/tailwind.svg";
import react from "../assets/icons/react.svg";
import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import redux from "../assets/icons/redux.svg";
import git from "../assets/icons/git.svg";
import me from "../assets/icons/me.png";
import jira from "../assets/icons/jira.svg";
import materialui from "../assets/icons/materialui.svg";
import npm from "../assets/icons/npm.svg";
import firebase from "../assets/icons/firebase.svg";
import postman from "../assets/icons/postman.svg";
import typescript from "../assets/icons/typescript.svg";

import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

export default function Welcome() {
  const { t } = useTranslation();

  const skillsIcons = [
    { name: "javascript", src: js, delay: 0 },
    { name: "typescript", src: typescript, delay: 0.1 },
    { name: "next", src: next, delay: 0.2 },
    { name: "tailwind", src: tailwind, delay: 0.3 },
    { name: "react", src: react, delay: 0.4 },
    { name: "html5", src: html, delay: 0.5 },
    { name: "css3", src: css, delay: 0.6 },
    { name: "redux", src: redux, delay: 0.7 },
    { name: "git", src: git, delay: 0.8 },
    { name: "jira", src: jira, delay: 0.9 },
    { name: "materialui", src: materialui, delay: 1 },
    { name: "npm", src: npm, delay: 1.1 },
    { name: "firebase", src: firebase, delay: 1.2 },
    { name: "postman", src: postman, delay: 1.3 },
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
      href: "https://www.linkedin.com/in/alexmezsan",
    },
    {
      name: "CV",
      icon: FileDownload,

      description: t("cv"),
      href: "./Alexander_Mezquita_CV.pdf",
    },
  ];

  // const SocialIcons = (props) => (

  // );

  return (
    <section className="pt-32" id="home">
      <div className="relative">
        <div className=" flex flex-col items-center z-10 secondary-bg-color  p-7 md:p-10  rounded-xl ">
          <div className="absolute meIconTransition -top-20 h-28 w-28   border-4 dark:border-[#15191e] border-[#F9FAFB]  secondary-bg-color flex justify-center items-center rounded-full">
            <img alt="Alex" className=" h-28 w-28 " src={me} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 animationIn">
              <h2 className=" text-center lg:text-left">{t("greet")}</h2>
              <h4 className="mb-5 text-center lg:text-left">{t("title")}</h4>
              <p className="text-slate-500  dark:text-slate-300  text-center lg:text-left">
                {t("description")}
                <span className="pulseAnimation">|</span>
              </p>
              <h3 className="mt-5 mb-2 text-center lg:text-left">
                {t("contact")}
              </h3>
              <a
                href="mailto:alexmezsan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="  font-medium dark:text-white w-full overflow-auto transition-all duration-100  underline hover:font-bold underline-offset-4 text-center lg:text-left mb-5">
                  alexmezsan@gmail.com
                </p>
              </a>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {socialsIcons.map((item, index) => (
                  <a
                    download
                    key={index}
                    href={item.href}
                    style={{ animationDelay: `${item.delay}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center transition-all hover:scale-110 duration-300 cursor-pointer border-2 p-3 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black buttonAnimation text-black dark:text-white hover:text-white hover:bg-black"
                  >
                    {item.description}

                    <item.icon fontSize="small" />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className=" animationIn mb-5 text-center lg:text-left">
                {t("skills")}
              </h2>
              <ul
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                id="skills"
              >
                {skillsIcons.map((item, index) => {
                  return (
                    <li key={index} className="relative hover:[&>p]:visible">
                      <img alt="" src={item.src} className="w-[4.5rem] h-20 " />
                      <p className=" absolute  z-10 bg-white p-2 rounded-md dark:bg-[#15191e]">
                        {item.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
