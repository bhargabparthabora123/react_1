import "./App.css";

import Navbar from "./components/Navbar";

import TextForm from "./TextForm";
// import About from "./About";
import Alert from "./components/Alert";

import React, { useState } from "react";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

//inside return it is nothing but HTML
//app.js is the page from where the website is rendered in the browser and after creating the react app using package manager like npm or npx we will start with the app.js file and also perform the necessary editings in this file

//react has two types of components 1-->function based component and 2--> class based componnets
//nowadays function based components are used more frequently then class based components

//so what is function based component-->
//e.g-->below we have a function based component .we use the normal function syntax of javascript and then inside the curly braces of the App function (as shown below) we return 'JSX'-->which is nothing but HTML document as said before

//in react jsx we can return only one Element (HTML element) but if we want to return multiple elements then we have to use the JSX fragment <>...</>

//named export and default export
//are  two very important concepts of react js before learning props
//
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUTiLs"
          about_text="About TextUTiLs"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4 ">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}

            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="enter the text to analyze"
                  mode={mode}
                />
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
//hvbjhv