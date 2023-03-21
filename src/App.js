import { useEffect, useState, createContext } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./components/index/welcome";
import Footer from "./components/index/footer";
import Project from "./components/index/project";
import TopBar from "./components/index/topbar";

export const ModeContext = createContext(undefined);
export const LanContext = createContext(undefined);

export function App() {
  const [showNav, setShowNav] = useState(false);
  const [mode, setMode] = useState("dark");

  const { i18n } = useTranslation();
  const [active, setActive] = useState("en");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e);
    if (e === "en") {
      setActive("en");
    } else {
      setActive("fr");
    }
  };

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const controlNavBar = () => {
    if (window.scrollY > 180) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <LanContext.Provider value={{ active, changeLanguage }}>
      <ModeContext.Provider value={{ mode, toggleTheme }}>
        <div className={mode} id="page">
          <nav>
            {/* Top Bar shown when screen size is sm */}
            <TopBar
              bgcolor="dark:bg-[#080808] bg-white dark:bg-opacity-50  bg-opacity-50 backdrop-blur-lg "
              position={`${
                !showNav ? "-top-[64px]" : "top-0"
              } z-20 fixed  transition-all duration-300`}
            />

            <TopBar position="bg-transparent absolute " />
          </nav>
          <main>
            <Welcome />
            <Project />
            {/* <ContactMe /> */}
          </main>
          <Footer />
        </div>
      </ModeContext.Provider>
    </LanContext.Provider>
  );
}
