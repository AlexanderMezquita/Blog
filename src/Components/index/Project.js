import React from "react";
import { Launch } from "@mui/icons-material";
import Title from "./Title";

export default function Project() {
  const Card = () => {
    return (
      <div className=" text-white  rounded-xl w-full lg:w-4/12 md:w-5/6 mx-auto lg:mx-0 lg:p-5 py-5 ">
        <div className=" rounded-xl group shadow-lg  shadow-[#191f29] relative  overflow-hidden">
          <img
            alt=""
            src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
            className=" w-full group-hover:scale-105 group-hover:blur-md rounded-xl shadow-lg shadow-white transition-all duration-500  "
          />
          <div className=" inset-0 flex justify-center items-center opacity-0  absolute group-hover:opacity-100 w-full h-full transition-all duration-500">
            <div className=" rounded-full border-2 cursor-pointer hover:scale-110 transition-all duration-300 bg-white/20 bg-opacity-100 border-white p-5 ">
              <Launch />
            </div>
          </div>
        </div>
        <div className=" py-3 flex flex-col ">
          <h2 className="text-lg">BillCrest</h2>
          <div className="flex flex-wrap mt-2 gap-2 text-xs">
            <Technologies title={"React"} />
            <Technologies title={"Tailwind"} />
            <Technologies title={"Material UI"} />
          </div>
        </div>
      </div>
    );
  };

  const Technologies = (props) => {
    return <p className="p-1  rounded-md secondary-bg-color">{props.title}</p>;
  };
  return (
    <section className=" max-w-5xl ml-auto mr-auto  " id="portfolio">
      <Title
        title="My work"
        description="These are some of the projects I've built for clients."
        backTitle="Some of my work"
      />
      <div className="flex flex-wrap p-7 lg:p-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
