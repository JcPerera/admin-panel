import "./theme.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="main">
        <Sidebar />
        <div className="mainContainer">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
