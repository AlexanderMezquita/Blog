import TopBar from "./Components/topBar/TopBar";
import { useEffect, useState } from "react";
import Welcome from "./Components/index/Welcome";
import ContactMe from "./Components/index/ContactMe";
import Footer from "./Components/index/Footer";
import Project from "./Components/index/Project";

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
      {/* Top Bar shown when screen size is sm */}

      {showNav && (
        <TopBar
          bgcolor="bg-[#080808]"
          position=" fixed z-20 "
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      <TopBar
        position="bg-transparent absolute"
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
      <main>
        <Welcome />
        <Project />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
