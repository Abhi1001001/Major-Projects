import React from "react";
import { Document, Page } from "react-pdf";
import { Link } from "react-router-dom";

export default function PDFElement(props) {
  return (
    <div className="xl:w-96 md:w-80 w-72 xl:h-60 md:h-56 h-52 rounded-lg border border-gray-500 px-2 py-1">
      <Document file={props.url}>
        <Page pageNumber={1} />
      </Document>
      <div className="h-full flex flex-col justify-end pb-6">
        <p>
          <b>Title</b> : {props.title}
        </p>
        {props.author ? (
          <p>
            <b>Author</b> : {props.author}
          </p>
        ) : (
          <p>
            <b>Author</b> : Not Available
          </p>
        )}
        {props.published ? (
          <p>
            <b>Published</b> : {props.published}
          </p>
        ) : (
          <p>
            <b>Published</b> : Not Available
          </p>
        )}
        <Link className="w-full text-center bg-blue-500 rounded-lg py-1 text-white hover:bg-blue-600" to={`/view-pdf/${props.id}`}>Click to view full PDF</Link>
      </div>
      
    </div>
  );
}
