import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  // state management ------------->
  constructor(){
    super()
    this.state = {
      search : ""
    }
  }
  // getting data from search ------->
  getData = (e)=>{
    this.setState({search : e.target.value})
  }
  // search data submitting ----------->
  postData = (e)=>{
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({search : ""})
  }


  render() {
    return (
      <>
       <nav className="navbar navbar-expand-lg bg-primary sticky-top ">
        <div className="container-fluid ">
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
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Live
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/all"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/latest-news"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Latest News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/education"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/sports"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/business"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/entertainment"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/life-style"
                  // blank search data sending to parent --------> 
                  onClick={() => props.changeSearch("")}
                >
                  Life Style
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
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
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      World
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/india"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/culture"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      Culture
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/technology"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/health"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/science"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/environment"
                      // blank search data sending to parent --------> 
                      onClick={() => props.changeSearch("")}
                    >
                      Environment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/weather"
                      // blank search data sending to parent --------> 
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
                      onClick={() => this.props.changeLanguage("hi")}
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                       // language data sending to parent -------->
                      onClick={() => this.props.changeLanguage("en")}
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
              onSubmit={(e) => this.postData(e)}
            >
              <input
                className="form-control input-search me-2 "
                type="search"
                name="search"
                onChange={(e) => this.getData(e)}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light btn-search"
                type="submit"
              >
                search
              </button>
            </form>
          </div>
        </div>
      </nav>
      </>
    );
  }
}
