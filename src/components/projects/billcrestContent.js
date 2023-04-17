import { useTranslation } from "react-i18next";
import billcrestLoginPage from "../assets/billcrest/billcrestLoginPage.png";
import list from "../assets/billcrest/lists.png";
import accountSettings from "../assets/billcrest/accountSettings.png";
import products from "../assets/billcrest/products.png";
import invoice from "../assets/billcrest/invoice.png";
import charts from "../assets/billcrest/charts.png";

import { GitHub } from "@mui/icons-material";

export default function BillCrestContent() {
  const { t } = useTranslation();
  return (
    <section className=" max-h-[450px]  py-5 overflow-y-scroll">
      <article className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3 px-5 overflow-y-auto">
        <img
          alt=""
          src={billcrestLoginPage}
          className="w-full lg:w-6/12 rounded-lg"
          id="imgProjects"
        />
        <div>
          <h3 className="mb-2">{t("billcrest.header1")}</h3>
          <p className="dark:text-slate-300">{t("billcrest.p1")}</p>

          <h3 className=" my-2">{t("billcrest.try")}</h3>
          <div className="flex justify-center space-x-3 mb-2">
            <a
              href="https://www.billcrest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full items-center transition-all hover:scale-105 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
            >
              Live App
            </a>
            <a
              href="https://github.com/AlamMena/Billcrest"
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

      <article className="flex  md:gap-9 p-5  overflow-y-auto">
        <div>
          {/* <p className="text-xs mb-2">
            Note: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            dolore sed, facere
          </p> */}
          <h3>{t("billcrest.header2")}</h3>

          <div className="flex flex-wrap  md:flex-nowrap gap-5 mt-4">
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img alt="" src={accountSettings} id="imgProjects" />
              <p>{t("billcrest.modify")}</p>
            </div>
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img alt="" src={products} id="imgProjects" />
              <p>{t("billcrest.manage")}</p>
            </div>
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img alt="" src={list} id="imgProjects" />
              <p>{t("billcrest.crud")}</p>
            </div>
          </div>
          <div className="flex flex-wrap  md:flex-nowrap gap-5 mt-4">
            <div className="flex md:basis-1/2 flex-col space-y-2">
              <img alt="" src={invoice} id="imgProjects" />
              <p>{t("billcrest.invoice")}</p>
            </div>
            <div className="flex md:basis-1/2 flex-col space-y-2">
              <img alt="" src={charts} id="imgProjects" />
              <p>{t("billcrest.charts")}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
