import { useTranslation } from "react-i18next";

export default function DevelopmentTag() {
  const { t } = useTranslation();
  return (
    <li className="p-1 text-xs font-bold rounded-md dark:bg-black border-2 bg-yellow-400 dark:border-yellow-500 border-black transition-all duration-300">
      <p className=" dark:text-yellow-500 text-black">{t("inDev")}</p>
    </li>
  );
}
