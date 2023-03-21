import { LightMode, DarkMode } from "@mui/icons-material";
import { useContext } from "react";
import { ModeContext } from "../../App";

export default function Switcher() {
  const { mode, toggleTheme } = useContext(ModeContext);
  return (
    <div
      className="dark:hover:text-black dark:hover:bg-white border-2
       dark:border-white border-black text-black hover:text-white hover:bg-black dark:text-white rounded-xl hover:scale-110 p-2 cursor-pointer
        flex justify-center items-center  transition-all duration-300"
      onClick={() => {
        toggleTheme();
      }}
    >
      {mode === "light" ? (
        <DarkMode fontSize="small" />
      ) : (
        <LightMode fontSize="small" />
      )}
    </div>
  );
}
