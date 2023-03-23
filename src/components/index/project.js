import React, { useState, useEffect } from "react";
import { Launch } from "@mui/icons-material";
import Title from "./title";
import { useTranslation } from "react-i18next";
import Billcrest from "../projects/billcrest";

export default function Project() {
  const [billcrestOpen, setBillcrestOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (billcrestOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [billcrestOpen]);

  const Card = (props) => {
    return (
      <div className=" text-white  rounded-xl w-full lg:w-4/12 md:w-5/6 mx-auto lg:mx-0 lg:px-3 p-5 py-5 ">
        <div
          className=" rounded-xl group shadow-lg  dark:shadow-[#191f29] shadow-[#EDEFF2] relative cursor-pointer  overflow-hidden"
          onClick={() => props.openProject(true)}
        >
          <img
            alt=""
            src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
            className=" w-full group-hover:scale-105 group-hover:blur-md rounded-xl shadow-lg shadow-white transition-all duration-500  "
          />
          <div className=" inset-0 flex justify-center items-center opacity-0  absolute group-hover:opacity-100 w-full h-full transition-all duration-500">
            <div className=" rounded-full border-2  hover:scale-110 transition-all duration-300 bg-white/20 bg-opacity-100 border-white p-5 ">
              <Launch />
            </div>
          </div>
        </div>
        <div className=" py-3 flex flex-col ">
          <h2 className="text-lg">{props.title}</h2>
          <div className="flex flex-wrap mt-2 gap-2 ">
            {props.techs.map((item, index) => (
              <p
                key={index}
                className="p-1 text-xs  rounded-md secondary-bg-color"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className=" max-w-5xl ml-auto mr-auto md:px-4" id="portfolio">
      <Title
        title={t("mywork")}
        description={t("myworkd")}
        backTitle={t("myworkb")}
      />

      <div className="flex flex-wrap  lg:p-0">
        {billcrestOpen && (
          <Billcrest open={billcrestOpen} close={setBillcrestOpen} />
        )}

        <Card
          openProject={setBillcrestOpen}
          title={"Billcrest"}
          techs={["React", "Tailwind", "Material UI"]}
        />
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </section>
  );
}
