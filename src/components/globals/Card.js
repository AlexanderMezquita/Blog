import { Launch } from "@mui/icons-material";
import DevelopmentTag from "./developmentTag";

export default function Card(props) {
  return (
    <div className=" text-white  rounded-xl w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 lg:px-3 py-5 ">
      <div
        className="  rounded-xl group shadow-lg hover:[&>ul]:hidden  dark:shadow-[#191f29] shadow-[#EDEFF2] relative cursor-pointer  overflow-hidden"
        onClick={props.handlePopup}
      >
        <img
          alt=""
          src={props.image}
          id="imgProjects"
          className=" w-full  group-hover:scale-105 group-hover:blur-md rounded-xl shadow-lg shadow-white transition-all duration-500  "
        />
        <div className=" inset-0 flex justify-center items-center opacity-0  absolute group-hover:opacity-100 w-full h-full transition-all duration-500">
          <ul className="absolute left-3 top-2">
            {props.development && <DevelopmentTag />}
          </ul>
          <div className=" rounded-full border-2  hover:scale-110 transition-all duration-300 bg-white/10 bg-opacity-100 border-neutral-400 text-neutral-400 p-5 ">
            <Launch />
          </div>
        </div>
      </div>
      <div className=" ml-2 py-3 flex flex-col ">
        <h2 className="text-lg flex">{props.title}</h2>

        <ul className="flex flex-wrap mt-2 gap-2 items-center ">
          {props.techs.map((item, index) => (
            <li
              key={index}
              className="p-1 text-xs dark:text-white  rounded-md secondary-bg-color"
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
