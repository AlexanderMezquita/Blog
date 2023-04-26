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
import soon from "../assets/icons/soon.svg";

export default function Timeline() {
  const elements = [
    {
      img: college,
      imgClass: "rounded-full border-2 border-[rgb(51 65 85)]",
      h3: "Web App Development - MCIT College",
      h4: "HTML - CSS - Angular - MySQL - PHP",
      p: "Learn technical skills and knowledge necessary to build high-quality, dynamic websites and web applications.",
      date: "2018 - 2019",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: keywords,
      imgClass: "rounded-full ",
      h3: "FQA Tester - Keywords Studios",
      h4: "Jira - Team work - Testing",
      p: "Learn how to analyze and report software defects accurately using tools like Jira",
      date: "2020 - 2022",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: billcrest,
      imgClass: " p-2  ",
      h3: "Billcrest - Personal Project",
      h4: "React - Material UI - Tailwind",
      p: "Learn to build a POS system and managing invoice data using Redux",
      date: "2022 - present",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: movie,
      imgClass: "mt-1 p-3",
      h3: "Movie Search App - Personal Project",
      h4: "Vite + React - CSS ",
      p: "Learn to paginate data and use useRef to optimize the search functionality",
      date: "2023",
      background: "rgb(33, 150, 243)",
      iconBackground: "#626a73",
    },
    {
      img: mysql,
      imgClass: "border-2 border-[rgb(51 65 85)] rounded-full",
      h3: "MySQL",
      h4: "Database creation - Connection to the API",
      p: "Currently learning about how to create a database and make connection to a restful API",
      date: "Currently Learning",
      background: "rgb(33, 150, 243)",
      iconBackground: "#fff",
    },
    {
      img: nodejs,
      imgClass: "p-2",
      h3: "Node.js",
      h4: "Express - Routing",
      p: "Currently learning about how to create a simple restful API using Node and Express with the best practices",
      date: "Currently learning",
      background: "rgb(33, 150, 243)",
      iconBackground: "#78B743",
    },
  ];

  return (
    <section id="timeline" className=" py-0 md:py-7">
      <Title
        title="Learning path"
        description="Timeline illustrating my progress and growth in learning throughout the years."
        backTitle="Professional Development"
      />
      <br></br>
      <VerticalTimeline lineColor="rgb(51 65 85)">
        {elements.map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work test"
              iconClassName="test"
              date={item.date}
              key={item.h3}
              iconStyle={{
                background: `${item.iconBackground}`,
                color: "#fff",
              }}
              icon={<img src={item.img} className={item.imgClass} alt="" />}
            >
              <h3>{item.h3}</h3>
              <h5>{item.h4}</h5>
              <p>{item.p}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          icon={<img alt="" src={soon} className="p-3" />}
        />
      </VerticalTimeline>
    </section>
  );
}
