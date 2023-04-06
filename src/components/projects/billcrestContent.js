import { useTranslation } from "react-i18next";
import billcrestLoginPage from "../assets/billcrest/billcrestLoginPage.png";

export default function BillCrestContent() {
  const { t } = useTranslation();
  return (
    <div className=" max-h-[450px] overflow-y-scroll">
      <div className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3  p-5 overflow-y-auto">
        <img
          alt=""
          src={billcrestLoginPage}
          className="w-full lg:w-6/12 rounded-lg"
        />
        <div>
          <p className="dark:text-slate-300">{t("billcrest.p1")}</p>
          <h3 className=" mt-1 mb-2">{t("billcrest.try")}</h3>
          <div className="flex justify-center space-x-3">
            <a
              href="https://www.billcrest.com"
              className="flex justify-center w-full items-center transition-all hover:scale-105 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
            >
              Live App
            </a>
            <a
              href="https://github.com/AlamMena/Billcrest"
              className="flex justify-center w-full items-center transition-all hover:scale-105 duration-300 cursor-pointer border-2 p-2 
       rounded-xl  dark:hover:text-black dark:hover:bg-white 
       dark:border-white border-black text-black dark:text-white hover:text-white hover:bg-black"
            >
              Repository
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3  p-5 overflow-y-auto">
        <img
          alt=""
          src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
          className="w-full lg:w-4/12 rounded-lg"
        />
        <div>
          <p>
            Billcrest is a user interface with forms for creating, reading,
            updating, and deleting data. The state management would be handled
            by Redux, allowing for easy data manipulation and updates across the
            application.
          </p>
          <h3 className=" mt-1">Try it out:</h3>
          <a href="https://www.billcrest.com">
            <p className="  w-full overflow-auto transition-all duration-100  underline hover:font-bold underline-offset-4 mt-2 mb-2">
              www.billcrest.com
            </p>
          </a>
          <p>
            User: <b> testuser@gmail.com</b>
          </p>
          <p>
            Password: <b> 1234567</b>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap w-full md:gap-9 gap-3  p-5 overflow-y-auto">
        <img
          alt=""
          src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
          className="w-full lg:w-4/12 rounded-lg"
        />
        <div>
          <p>
            Billcrest is a user interface with forms for creating, reading,
            updating, and deleting data. The state management would be handled
            by Redux, allowing for easy data manipulation and updates across the
            application.
          </p>
          <h3 className=" mt-1">Try it out:</h3>
          <a href="https://www.billcrest.com">
            <p className="  w-full overflow-auto transition-all duration-100  underline hover:font-bold underline-offset-4 mt-2 mb-2">
              www.billcrest.com
            </p>
          </a>
          <p>
            User: <b> testuser@gmail.com</b>
          </p>
          <p>
            Password: <b> 1234567</b>
          </p>
        </div>
      </div>
    </div>
  );
}
