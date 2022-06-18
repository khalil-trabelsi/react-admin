import React, { useContext, useEffect } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/lists/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./sourceForm";
import "./style/Dark.scss";
import { DarkModeContext } from "./context/AppThemeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const storedMode = localStorage.getItem("theme");

  console.log("stored ", localStorage.getItem("theme"), "\n value ", darkMode);
  return (
    <div className={storedMode === "true" ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":id" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new user" />}
              ></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId"></Route>
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add new product" />}
              ></Route>
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
