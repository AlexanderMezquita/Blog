import { useEffect, useState } from "react";
import Welcome from "./Components/index/Welcome";
import ContactMe from "./Components/index/ContactMe";
import Footer from "./Components/index/Footer";
import Project from "./Components/index/Project";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    <>
      <nav className="relative">
        {/* Top Bar shown when screen size is sm */}

        <TopBar
          bgcolor="bg-[#080808] bg-opacity-50 backdrop-blur-sm "
          position={`${
            !showNav && "top-[-100px]"
          } z-20  fixed top-0 transition-all duration-300`}
          // showDropdown={showDropdown}
          // setShowDropdown={setShowDropdown}
        />

        <TopBar
          position="bg-transparent absolute"
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
    </>
  );
}

export default App;
