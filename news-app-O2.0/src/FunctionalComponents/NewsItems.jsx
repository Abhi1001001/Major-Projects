import React from "react";

export default function NewsItems(props) {
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
        <div className="card">
          <img className="imgSize" src={props.pic} height="200px" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title.slice(0, 40) + "..."}</h5>
            <h6 className="card-source">
              {props.source} -{" "}
               {/* getting published date --------> */}
              {`${new Date(props.date).getDate()}/${
                new Date(props.date).getMonth() + 1
              }/${new Date(props.date).getFullYear()}`}
            </h6>
            <hr />
            <p className="card-text">
              {props.description.slice(0, 100) + "..."}
            </p>
            <a href={props.url} className="btn btn-primary btn-sm">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
