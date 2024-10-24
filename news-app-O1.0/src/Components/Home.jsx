import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from "./NewsItems";

export default class Home extends Component {
  // state management ------------>
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  // getting api data ----------->
  getAPIData = async () => {
    let response = "";
    if (this.props.search) {
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&pageSize=20&apiKey=efa92805383e4d84b6d9b01f5d798fd8`
      );
    } else {
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=20&apiKey=efa92805383e4d84b6d9b01f5d798fd8`
      );
    }
    let result = await response.json();
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
    });
  };

  // fetching data on scroll --------------->
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let response = "";
    if (this.props.search) {
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&pageSize=20&apiKey=efa92805383e4d84b6d9b01f5d798fd8`
      );
    } else {
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=20&apiKey=efa92805383e4d84b6d9b01f5d798fd8`
      );
    }
    let result = await response.json();
    this.setState({
      articles: this.state.articles.concat(result.articles),
    });
  };

  // for frist rendring ------------>
  componentDidMount() {
    this.getAPIData();
  }

  // rendring after props change ------------>
  componentDidUpdate(oldProps) {
    if (this.props != oldProps) {
      this.getAPIData();
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className="my-2 text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row">
              <h5 className="bg-primary text-light text-center p-2 mt-2">
                {this.props.q} news section
              </h5>
              {this.state.articles.map((items, index) => {
                return (
                  <NewsItems
                    key={index}
                    pic={items.urlToImage}
                    title={items.title}
                    description={items.description}
                    source={items.source.name}
                    date={items.publishedAt}
                    url={items.url}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
