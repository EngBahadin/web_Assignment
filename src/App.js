import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Schedule from "./components/Schedule";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FoodsPage from "./components/FoodsPage";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [currentLayout, setCurrentLayout] = useState("");
  const [floatStyle, setFloatStyle] = useState("");
  const [layoutName, setLayoutName] = useState("");
  const handleNavigation = (page, event) => {
    event.preventDefault(); // Prevents the default anchor behavior (page reload)
    setCurrentPage(page); // Change the page based on the clicked link
  };

  function handleChangeLayout(value) {
    setCurrentPage("Foods");
    if (value === "flex-layout") {
      setCurrentLayout(value);
      setLayoutName("Flexbox Sidebar");
    } else if (value === "float-bottom") {
      setFloatStyle(value);
      setCurrentLayout("");
      setLayoutName("Floated Sidebar");
    } else {
      setCurrentLayout(value);
      setFloatStyle("");
      setLayoutName("Grid View");
    }
  }

  return (
    <>
      <header>
        <h1>WebDesign 2025 Assignment</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <a
              className={currentPage === "home" && "active"}
              href="/home.html"
              onClick={(e) => handleNavigation("home", e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={currentPage === "Foods" && "active"}
              href="foods"
              onClick={(e) => handleNavigation("Foods", e)}
            >
              Foods
            </a>
          </li>
          <li>
            <a
              href="/Schedule.html"
              onClick={(e) => handleNavigation("schedule", e)}
              className={currentPage === "schedule" && "active"}
            >
              Schedule
            </a>
          </li>

          {/* Dropdown menu item for Layout Design */}
          <li className="dropdown">
            <a
              href="foods"
              className="dropbtn"
              onClick={(e) => handleNavigation("Foods", e)}
            >
              Layout Design
            </a>
            <div className="dropdown-content">
              <p onClick={() => handleChangeLayout("float-bottom")}>
                Float Layout with Side nav
              </p>
              <p onClick={() => handleChangeLayout("flex-layout")}>
                FlexBox Layout with Side nav
              </p>
              <p onClick={() => handleChangeLayout("grid-layout")}>
                Grid Layout with Side nav
              </p>
            </div>
          </li>

          <li>
            <a
              href="/Signup.html"
              onClick={(e) => handleNavigation("signup", e)}
              className={currentPage === "signup" && "active"}
            >
              Signup
            </a>
          </li>
          <li>
            <a
              href="/Login.html"
              onClick={(e) => handleNavigation("login", e)}
              className={currentPage === "login" && "active"}
            >
              Signin
            </a>
          </li>
        </ul>
      </nav>
      {currentPage === "Foods" && (
        <FoodsPage
          currentLayout={currentLayout}
          setCurrentLayout={setCurrentLayout}
          layoutName={layoutName}
          setFloatStyle={setFloatStyle}
          floatStyle={floatStyle}
          setLayoutName={setLayoutName}
        />
      )}
      {currentPage === "home" && <HomePage />}
      {currentPage === "" && <HomePage />}
      {currentPage === "schedule" && <Schedule />}
      {currentPage === "signup" && <Signup />}
      {currentPage === "login" && <Login />}
      <Footer />
    </>
  );
}

export default App;
