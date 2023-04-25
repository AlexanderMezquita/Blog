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
  const [mode, setMode] = useState();
  const [flag, setFlag] = useState(false);

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (e) => {
    if (e === "en") {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };

  const toggleTheme = () => {
    setMode(!mode);
  };

  const controlNavBar = () => {
    if (window.scrollY > 180) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    const storedPreference = localStorage.getItem("prefersDarkMode");
    const lanPreference = localStorage.getItem("userLanguage");

    if (storedPreference) {
      setMode(JSON.parse(storedPreference));
    }

    if (lanPreference) {
      setLanguage(lanPreference);
    }
    setFlag(true);
  }, []);

  useEffect(() => {
    if (flag) {
      localStorage.setItem("prefersDarkMode", mode ? true : false);
    }
    mode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [mode, flag]);

  useEffect(() => {
    if (flag) {
      localStorage.setItem("userLanguage", language ? language : " ");
    }
    i18n.changeLanguage(language);
  }, [language, flag, i18n]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <LanContext.Provider value={{ language, changeLanguage }}>
      <ModeContext.Provider value={{ mode, toggleTheme }}>
        <div id="page">
          <nav>
            {/* Top Bar shown when screen size is sm */}
            <TopBar
              bgcolor="dark:bg-[#080808] bg-white dark:bg-opacity-50  bg-opacity-50 backdrop-blur-lg "
              position={`${
                showNav ? "top-0" : "-top-[64px]"
              } z-20  transition-all duration-300`}
            />

            <TopBar position="bg-transparent absolute " />
          </nav>
          <main className="max-w-5xl ml-auto mr-auto md:px-4">
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
