import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
  //state management for data passing to child componenet --------->
  let [language, setlanguage] = useState("hi");
  let [search, setsearch] = useState("");

  const changeLanguage = (data) => {
    setlanguage(data);
  };
  const changeSearch = (data) => {
    setsearch(data);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar changeLanguage={changeLanguage} changeSearch={changeSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} language={language} q="all" />}
          />
          <Route
            path="/live"
            element={<Home search={search} language={language} q="live" />}
          />
          <Route
            path="/all"
            element={<Home search={search} language={language} q="all" />}
          />
          <Route
            path="/latest-news"
            element={
              <Home search={search} language={language} q="latest-news" />
            }
          />
          <Route
            path="/education"
            element={<Home search={search} language={language} q="education" />}
          />
          <Route
            path="/sports"
            element={<Home search={search} language={language} q="sports" />}
          />
          <Route
            path="/business"
            element={<Home search={search} language={language} q="business" />}
          />
          <Route
            path="/entertainment"
            element={
              <Home search={search} language={language} q="entertainment" />
            }
          />
          <Route
            path="/life-style"
            element={
              <Home search={search} language={language} q="life-style" />
            }
          />
          <Route
            path="/world"
            element={<Home search={search} language={language} q="world" />}
          />
          <Route
            path="/india"
            element={<Home search={search} language={language} q="india" />}
          />
          <Route
            path="/culture"
            element={<Home search={search} language={language} q="culture" />}
          />
          <Route
            path="/technology"
            element={
              <Home search={search} language={language} q="technology" />
            }
          />
          <Route
            path="/health"
            element={<Home search={search} language={language} q="health" />}
          />
          <Route
            path="/Science"
            element={<Home search={search} language={language} q="science" />}
          />
          <Route
            path="/environment"
            element={
              <Home search={search} language={language} q="environment" />
            }
          />
          <Route
            path="/weather"
            element={<Home search={search} language={language} q="weather" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
