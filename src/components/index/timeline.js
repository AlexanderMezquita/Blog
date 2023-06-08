import Title from "./title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import nodejs from "../assets/icons/node.svg";
import college from "../assets/icons/college.png";
import keywords from "../assets/icons/keywords.png";
import mysql from "../assets/icons/mysql.svg";
import billcrest from "../assets/icons/billcrest.png";
import movie from "../assets/icons/movie.svg";
// import soon from "../assets/icons/soon.svg";
import coursera from "../assets/icons/coursera.png";
import ablogo from "../assets/a&b-ecommerce/ab-logo.png";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  const elements = [
    {
      img: college,
      imgClass: "rounded-full border-2 border-[rgb(51 65 85)]",
      h3: "Web App Development - MCIT College",
      h5: "HTML - CSS - Angular - MySQL - PHP",
      p: t("timeline.college"),
      date: "2018 - 2019",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: keywords,
      imgClass: "rounded-full ",
      h3: "FQA Tester - Keywords Studios",
      h5: "Jira - Team work - Testing",
      p: t("timeline.keywords"),
      date: "2020 - 2022",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: billcrest,
      imgClass: " p-2  ",
      h3: "Billcrest - Personal Project",
      h5: "React - Material UI - Tailwind",
      p: t("timeline.billcrest"),
      date: "2022 - present",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: coursera,
      imgClass: " p-2  ",
      h3: "Meta Front-End Developer - Coursera",
      h5: "Version Control - UI/UX Design - React",
      p: t("timeline.coursera"),
      date: "2022 - 2023",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: movie,
      imgClass: "mt-1 p-3",
      h3: "Movie Search App - Personal Project",
      h5: "Vite + React - CSS ",
      p: t("timeline.moviesearch"),
      date: "2023",
      background: "rgb(33, 150, 243)",
      iconBackground: "#626a73",
    },
    {
      img: ablogo,
      imgClass: " mt-3",
      h3: "Abercrombie & Fitch Template - Personal Project",
      h5: "TypeScript - Next.js - Tailwind ",
      p: t("timeline.ecommerce"),
      date: "2023 - present",
      background: "rgb(33, 150, 243)",
      iconBackground: "	#FFFFFF",
    },
    {
      img: mysql,
      imgClass: "border-2 border-[rgb(51 65 85)] rounded-full",
      h3: "MySQL",
      h5: "Database creation - Connection to the API",
      p: t("timeline.mysql"),
      date: t("timeline.learning"),
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: nodejs,
      imgClass: "p-2",
      h3: "Node.js",
      h5: "Express - Routing",
      p: t("timeline.node"),
      date: t("timeline.learning"),
      background: "rgb(33, 150, 243)",
      iconBackground: "#78B743",
    },
  ];

  return (
    <section id="timeline" className=" pt-0 md:pt-7">
      <Title
        title={t("mytimeline")}
        description={t("timelinedes")}
        backTitle={t("timelinebackt")}
      />
      <br></br>

      <VerticalTimeline lineColor="rgb(51 65 85)">
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          icon={<img alt="" src={soon} className="p-3" />}
        /> */}
        {elements.reverse().map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work test"
              date={item.date}
              key={item.h3}
              contentArrowStyle={{
                borderRight: "8px solid  rgb(51 65 85)",
              }}
              iconStyle={{
                background: `${item.iconBackground}`,
                color: "#fff",
              }}
              icon={<img src={item.img} className={item.imgClass} alt="" />}
            >
              <h3>{item.h3}</h3>
              <h5 className="text-slate-500  dark:text-slate-400">{item.h5}</h5>
              <p>{item.p}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
