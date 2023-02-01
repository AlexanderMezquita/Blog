import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 150) {
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
      {showNav && <TopBar color="bg-black fixed " />}
      <TopBar color="bg-transparent absolute " />
      <div className=" h-screen w-screen bg-slate-600 text-blue-800 ">
        AALOO
      </div>
      <div className="h-screen w-screen bg-slate-500 text-blue-800">AALOO</div>
    </div>
  );
}

export default App;
