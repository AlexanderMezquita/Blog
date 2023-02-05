import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import { useEffect, useState } from "react";
import Welcome from "./Components/index/Welcome";
import ContactMe from "./Components/index/ContactMe";

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
    <div>
      {/* Top Bar shown when screen size is sm */}
      {showNav && (
        <TopBar
          classes="bg-black fixed z-10 "
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      <TopBar
        classes="bg-transparent absolute  "
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
      <section id="home">
        <Welcome />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
