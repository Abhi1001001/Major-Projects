import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props) {
  //state management for article, totalResult, page ---------->
  let [articles, setarticles] = useState([]);
  let [totalResults, settotalresults] = useState(0);
  let [page, setpage] = useState(1);

  //getting data from api (only 1 page data) ------------->
  const getAPIData = async () => {
    let response = "";
    // getting response with search data -------------->
    if (props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.search}&page=1&language=${props.language}&apiKey=a649b36182b34b0199f15b8fd47cdfd6`
      );
    // getting response with query parameter -------------->
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.q}&page=1&language=${props.language}&apiKey=a649b36182b34b0199f15b8fd47cdfd6`
      );
    let result = await response.json();
    setarticles(result.articles);
    settotalresults(result.totalResults);
  };

  //getting data from api (only 1+ more page data) ------------->
  const fetchMoreData = async () => {
    setpage(page + 1);
    let response = "";
    // getting response with search data -------------->
    if (props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.search}&${page}&language=${props.language}&apiKey=a649b36182b34b0199f15b8fd47cdfd6`
      );
    // getting response with query parameter -------------->
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.q}&${page}&language=${props.language}&apiKey=a649b36182b34b0199f15b8fd47cdfd6`
      );
    let result = await response.json();
    // result(array) concatination with page 1 result ------------->
    setarticles(articles.concat(result.articles));
  };

  // useEffect with props dependensy ------->
  useEffect(() => {
    getAPIData();
  }, [props]);

  return (
    <>
      <div className="container-fluid">
        {/* infinite scroll from bootstrap */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            <h2>{props.q} news</h2>
            {articles.map((item, index) => {
              return (
                <NewsItems
                  key={index}
                  pic={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  source={item.source.name}
                  date={item.publishedAt}
                  url={item.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
