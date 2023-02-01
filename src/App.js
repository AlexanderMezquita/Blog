import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

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
      {showNav && (
        <TopBar
          classes="bg-black fixed z-10"
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      <TopBar
        classes="bg-transparent absolute  "
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
      <div className=" h-screen w-screen bg-slate-600 text-blue-800 ">
        AALOO
      </div>
      <div className="h-screen w-screen bg-slate-500 text-blue-800">AALOO</div>
    </div>
  );
}

export default App;
