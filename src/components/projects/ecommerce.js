import DevelopmentTag from "../globals/developmentTag";
import { useTranslation } from "react-i18next";
import EcommerceContent from "./ecommerceContent";

export default function Ecommerce(props) {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        props.open ? " opacity-100 z-20  " : " opacity-0 -z-10"
      } fixed inset-0  bg-opacity-50 flex justify-center   overflow-y-scroll items-center bg-black backdrop-blur-sm  w-full p-4 transition-all ease-out duration-300 `}
      // onClick={(e) => props.close(e)}
    >
      <div
        className={`${
          props.open ? "scale-100" : "scale-75"
        } bg-white rounded-lg shadow dark:bg-[#1f252e]   max-w-5xl z-50 max-h-screen transition-all  duration-300 `}
      >
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <div className="flex md:items-center flex-col md:flex-row space-x-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Abercrombie & Fitch E-commerce
            </h3>
            <ul className="flex flex-wrap mt-2 gap-2 ">
              <DevelopmentTag />
            </ul>
          </div>
          <button
            type="button"
            onClick={(e) => props.close(e)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>

        <EcommerceContent />

        <div className="flex justify-end items-center p-5 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={(e) => props.close(e)}
          >
            {t("cancel")}
          </button>
        </div>
      </div>
    </div>
  );
}
