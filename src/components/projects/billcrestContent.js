import { useTranslation } from "react-i18next";
import billcrestLoginPage from "../assets/billcrest/billcrestLoginPage.png";
import list from "../assets/billcrest/lists.png";
import accountSettings from "../assets/billcrest/accountSettings.png";

import { GitHub } from "@mui/icons-material";

export default function BillCrestContent() {
  const { t } = useTranslation();
  return (
    <div className=" max-h-[450px]  py-5 overflow-y-scroll">
      <div className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3 px-5 overflow-y-auto">
        <img
          alt=""
          src={billcrestLoginPage}
          className="w-full lg:w-6/12 rounded-lg"
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
      </div>

      <div className="flex  md:gap-9 p-5  overflow-y-auto">
        <div>
          <h3>What can you do in this app?</h3>

          <div className="flex flex-wrap  md:flex-nowrap gap-5 mt-4">
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img
                alt=""
                src={accountSettings}
                className="w-full   rounded-lg"
              />
              <p>
                Modify user personal information, such as name, email address,
                and phone number allowing users to manage their account
                settings.
              </p>
            </div>
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img
                alt=""
                src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
                className="  rounded-lg"
              />
              <p>
                Manage inventory: Track inventory levels in real-time, update
                inventory counts.
              </p>
            </div>
            <div className="flex md:basis-1/3 flex-col space-y-2">
              <img alt="" src={list} className=" rounded-lg" />
              <p>
                CRUD: You can use the app to create, read, update and delete new
                records in the database.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap  md:flex-nowrap gap-5 mt-4">
            <div className="flex md:basis-1/2 flex-col space-y-2">
              <img
                alt=""
                src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
                className="w-full   rounded-lg"
              />
              <p>
                Process sales transactions: You can use the app to process sales
                transactions, including accepting payment by credit card, debit
                card, or cash. The app can also calculate the total cost of the
                purchase, including taxes and any discounts.
              </p>
            </div>
            <div className="flex md:basis-1/2 flex-col space-y-2">
              <img
                alt=""
                src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
                className="  rounded-lg"
              />
              <p>
                Provide a visual representation of data that is easy to
                understand and interpret using charts. This can help users to
                quickly identify trends and patterns, and make informed
                decisions based on the data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
