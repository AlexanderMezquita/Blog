import { useEffect, useState } from "react";
import Welcome from "./Components/index/Welcome";
import Footer from "./Components/index/Footer";
import Project from "./Components/index/Project";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mode, setMode] = useState("dark");

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
    <div className={mode} id="page">
      <nav>
        {/* Top Bar shown when screen size is sm */}
        <TopBar
          theme={toggleTheme}
          mode={mode}
          bgcolor="dark:bg-[#080808] bg-white dark:bg-opacity-50  bg-opacity-50 backdrop-blur-lg "
          position={`${
            !showNav ? "-top-[64px]" : "top-0"
          } z-20 fixed  transition-all duration-300`}
        />

        <TopBar
          mode={mode}
          theme={toggleTheme}
          position="bg-transparent absolute "
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </nav>
      <main>
        <Welcome />
        <Project />
        {/* <ContactMe /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
