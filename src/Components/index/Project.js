import React from "react";
import { ArrowBackIos } from "@mui/icons-material";

export default function Project() {
  const Card = () => {
    return (
      <div className=" text-white max-w-lg rounded-xl col-span-12 md:col-span-6 m-auto ">
        <div className=" rounded-xl shadow-lg shadow-[#191f29] relative  overflow-hidden">
          <img
            alt=""
            src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
            className=" hover:scale-105 hover:blur-sm rounded-xl cursor-pointer shadow-lg shadow-white   transition-all duration-300 "
          />
          <div className=" m-auto inset-0 opacity-0 absolute hover:opacity-100 w-full h-full transition-all duration-300">
            <ArrowBackIos className="" />
          </div>
        </div>
        <div className="p-3 flex flex-col space-y-2">
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
    <section className="  p-10  " id="portfolio">
      <div className="max-w-5xl ml-auto mr-auto relative">
        <Card />
      </div>
    </section>
  );
}
