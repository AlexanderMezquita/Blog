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

import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

export default function Welcome() {
  const { t } = useTranslation();

  const skillsIcons = [
    { name: "javascript", src: js, delay: 0 },
    { name: "next", src: next, delay: 0.3 },
    { name: "tailwind", src: tailwind, delay: 0.6 },
    { name: "react", src: react, delay: 0.9 },
    { name: "html", src: html, delay: 1.2 },
    { name: "css", src: css, delay: 1.5 },
    { name: "redux", src: redux, delay: 1.8 },
    { name: "git", src: git, delay: 2.1 },
    { name: "jira", src: jira, delay: 2.4 },
    { name: "materialui", src: materialui, delay: 2.7 },
    { name: "npm", src: npm, delay: 3 },
    { name: "firebase", src: firebase, delay: 3.3 },
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
      href: "https://www.linkedin.com/in/alexander-m%C3%A9zquita-a9294918a/",
    },
    {
      name: "CV",
      icon: FileDownload,
      description: t("cv"),
      // href: "https://github.com/AlexanderMezquita",
    },
  ];

  const SocialIcons = (props) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center transition-all hover:scale-110 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
    >
      {props.description}
      <props.icon fontSize="small" />
    </a>
  );

  return (
    <section className=" max-w-5xl ml-auto mr-auto    p-5 pt-32 " id="home">
      <div className="relative">
        <div className=" flex flex-col items-center z-10 secondary-bg-color  p-7 md:p-10  rounded-xl ">
          <div className="absolute meIconTransition -top-20 h-28 w-28   border-4 dark:border-[black] border-[#F9FAFB]  secondary-bg-color flex justify-center items-center rounded-full">
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
                  <SocialIcons
                    href={item.href}
                    key={index}
                    icon={item.icon}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="mb-5 text-center lg:text-left">{t("skills")}</h2>
              <ul
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
                id="skills"
              >
                {skillsIcons.map((item, index) => {
                  return (
                    <li style={{ animationDelay: `${item.delay}s` }}>
                      <img alt="" src={item.src} className="w-[4.5rem] h-20 " />
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
