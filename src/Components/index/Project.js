import React from "react";
import { Launch } from "@mui/icons-material";

export default function Project() {
  const Card = () => {
    return (
      <div className=" text-white  rounded-xl w-full lg:w-4/12 lg:p-5 py-5 ">
        <div className=" rounded-xl group shadow-lg  shadow-[#191f29] relative  overflow-hidden">
          <img
            alt=""
            src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
            className=" w-full group-hover:scale-105 group-hover:blur-md rounded-xl shadow-lg shadow-white transition-all duration-300 "
          />
          <div className=" inset-0 flex justify-center items-center opacity-0 cursor-pointer absolute group-hover:opacity-100 w-full h-full transition-all duration-300">
            <div className=" rounded-full border-2 bg-white/30 bg-opacity-100 border-white p-5 ">
              <Launch />
            </div>
          </div>
        </div>
        <div className=" py-3 flex flex-col space-y-2">
          <h2 className="">BillCrest</h2>
          <div className="flex flex-wrap gap-2 pt-2">
            <Technologies title={"React"} />
            <Technologies title={"Tailwind"} />
            <Technologies title={"Material UI"} />
          </div>
        </div>
      </div>
    );
  };

  const Technologies = (props) => {
    return (
      <div className="p-2 text-white text-xs rounded-lg secondary-bg-color">
        {props.title}
      </div>
    );
  };
  return (
    <section
      className=" max-w-5xl ml-auto mr-auto flex flex-wrap p-7 lg:p-0 "
      id="portfolio"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
