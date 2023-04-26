import { useTranslation } from "react-i18next";
import movieSearchImage from "../assets/searchApp/searchapp.png";
import { GitHub } from "@mui/icons-material";

export default function MovieSearchContent() {
  const { t } = useTranslation();

  return (
    <section className=" max-h-[450px]  py-5 overflow-y-scroll">
      <article className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3 px-5 overflow-y-auto">
        <img
          alt=""
          src={movieSearchImage}
          className="w-full lg:w-6/12 rounded-lg"
          id="imgProjects"
        />
        <div>
          <h3 className="mb-2">{t("billcrest.header1")}</h3>
          <p className="dark:text-slate-300">{t("moviesearch.p1")}</p>

          <h3 className=" my-2">{t("billcrest.try")}</h3>
          <div className="flex justify-center space-x-3 mb-2">
            <a
              href="https://search-app-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full items-center transition-all hover:scale-105 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
            >
              Live App
            </a>
            <a
              href="https://github.com/AlexanderMezquita/search-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center  w-full items-center transition-all hover:scale-105 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
            >
              <GitHub alt="" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </article>

      <article className=" md:gap-9 p-5  overflow-y-auto">
        <h3>{t("moviesearch.header1")}</h3>
        <ul className=" list-disc ml-4 mt-4 space-y-2">
          <li>{t("moviesearch.li1")}</li>
          <li>{t("moviesearch.li2")}</li>
          <li>{t("moviesearch.li3")}</li>
          <li>{t("moviesearch.li4")}</li>
          <li>{t("moviesearch.li5")}</li>
          <li>{t("moviesearch.li6")}</li>
        </ul>
      </article>
    </section>
  );
}
