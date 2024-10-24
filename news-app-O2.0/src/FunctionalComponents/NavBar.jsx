import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  //state management for search value --------------->
  let [search, setsearch] = useState("");
  //getting data from search ------------>
  const getData = (e) => {
    setsearch(e.target.value);
  };
  // search data sending to parent ------------>
  const postData = (e) => {
    e.preventDefault();
    props.changeSearch(search);
    setsearch("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top ">
        <div className="container-fluid ">
          <span class="material-symbols-outlined text-light">newspaper</span>
          <Link className="navbar-brand text-light" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/live"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Live
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/all"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/latest-news"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Latest News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/education"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/sports"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/business"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/entertainment"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/life-style"
                  // blank data sending to parent -------->
                  onClick={() => props.changeSearch("")}
                >
                  Life Style
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other News
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/world"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      World
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/india"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/culture"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Culture
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/technology"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/health"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/science"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/environment"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Environment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/weather"
                      // blank data sending to parent -------->
                      onClick={() => props.changeSearch("")}
                    >
                      Weather
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      // language data sending to parent -------->
                      onClick={() => props.changeLanguage("hi")}
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      // language data sending to parent -------->
                      onClick={() => props.changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="d-flex "
              role="search"
              onSubmit={(e) => postData(e)}
            >
              <input
                className="form-control input-search me-2 "
                type="search"
                name="search"
                onChange={(e) => getData(e)}
                placeholder="Search"
                aria-label="Search"
                value={search}
              />
              <button
                className="btn btn-outline-light btn-search"
                type="submit"
              >
                <span class="material-symbols-outlined">search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
