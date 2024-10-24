import React, { Component } from "react";
import "../style.scss";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";

export default class App extends Component {
  // state management -------->
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }

  // getting language from navbar ---------->
  changeLanguage = (data) => {
    this.setState({ language: data });
  };

  // getting search data from navbar ------->
  changeSearch = (data) => {
    this.setState({ search: data });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar
            changeLanguage={this.changeLanguage}
            changeSearch={this.changeSearch}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="all"
                />
              }
            />
            <Route
              path="/live"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="live"
                />
              }
            />
            <Route
              path="/all"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="all"
                />
              }
            />
            <Route
              path="/latest-news"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="latest-news"
                />
              }
            />
            <Route
              path="/education"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="education"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="sports"
                />
              }
            />
            <Route
              path="/business"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="entertainment"
                />
              }
            />
            <Route
              path="/life-style"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="life-style"
                />
              }
            />
            <Route
              path="/world"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="world"
                />
              }
            />
            <Route
              path="/india"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="india"
                />
              }
            />
            <Route
              path="/culture"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="culture"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="technology"
                />
              }
            />
            <Route
              path="/health"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="health"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="science"
                />
              }
            />
            <Route
              path="/environment"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="environment"
                />
              }
            />
            <Route
              path="/weather"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="weather"
                />
              }
            />
          </Routes>
          <Home />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
