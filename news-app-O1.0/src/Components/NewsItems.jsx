import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    return (
      <>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card m-2">
            <img
              src={this.props.pic}
              height="200px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-source">
                {this.props.source} -{" "}
                {`${new Date(this.props.date).getFullYear()}/${new Date(
                  this.props.date
                ).getMonth()}/${new Date(this.props.date).getDate()}`}
              </p>
              <hr />
              <p className="card-text">{this.props.description}</p>
              <a href={this.props.url} className="btn btn-primary w-100 btn-sm">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
